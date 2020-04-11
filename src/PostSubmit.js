import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './PostSubmit.css';
import CurrencyFormat from 'react-currency-format';
import TransactionDetail from './TransactionDetail';
import ReactLoading from "react-loading";

class PostSubmit extends Component{
    grandTotals = 0;

    constructor(props) {
        super(props);
        this.state = {
            transactionData: [],
            finish: false
        };
        this.screen = React.createRef(); //for auto focus to screen
    }

    GetGrandTotal = () => {
        var data = this.state.transactionData.TRANSACTION_DETAIL;
        for (let i = 0; i < data.length; i++){
            this.grandTotals += Number(data[i].QUANTITY) * Number(data[i].BASE_PRICE);
        }
        return this.grandTotals;
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.handleOnClick(1);
            // return this.props.history.push({
            //     pathname: '/FinishScreen',
            //     state: { 
            //         txnId: this.state.transactionData.ID_TRANSACTION, 
            //         grandPrice: this.grandTotals
            //     }
            // });
        }
    }

    handleOnClick = (id) => {
        if(id === 1){
            fetch('https://smarley-rest.herokuapp.com/closeTransaction', {
                method: 'post',
                mode: "cors",
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    closeStatus: "closed",
                    txnId: this.state.transactionData.ID_TRANSACTION, 
                    grandPrice: this.grandTotals
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(console.log)
        }
        else{
            fetch('https://smarley-rest.herokuapp.com/closeTransaction', {
                method: 'post',
                mode: "cors",
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    txnId: this.state.transactionData.ID_TRANSACTION, 
                    grandPrice: this.grandTotals,
                    closeStatus: "cancel"
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(console.log)
        }
        return this.props.history.push({pathname: '/FinishScreen'});
    }

    componentDidMount() {
        this.screen.current.focus();
        
        fetch('https://smarley-rest.herokuapp.com/getTransactionDetail', {
            method: 'post',
            mode: "cors",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({OTP: this.props.location.state.OTP})
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                transactionData: data
            })
            if(this.state.transactionData.STATUS === "failed"){
                alert("Transaction Not Found");
                return this.props.history.push({pathname: '/'});
            }
            this.setState({
                finish: true
            })
            console.log(this.state.transactionData);
        })
        .catch(console.log)
    }

    render(){
        if(!this.state.finish) 
            return (
                <div tabIndex="0" ref={this.screen} className="main">
                    <ReactLoading type={"bars"} color={"white"} height={'20%'} width={'20%'} id="loading"/>
                </div>
            );
        else{
            this.screen.current.focus();
            return(
                <div className="main" onKeyPress={this.handleKeyPress} tabIndex="0" ref={this.screen}>
                    <div id="title">TRANSACTION DETAIL</div>
                    <div id="detailBox">
                        <div id="transactionId">Transaction ID : {this.state.transactionData.ID_TRANSACTION}</div>
                        <div id="transactionList">
                            <div className="transactionHeader">
                                <div id="productNameHeader">Product Name</div>
                                <div id="quantityHeader">Quantity</div>
                                <div id="unitPriceHeader">Unit Price</div>
                                <div id="totalPriceHeader">Total Price</div>
                            </div>
                            <div id="transactionDetail">
                                {
                                    this.state.transactionData.TRANSACTION_DETAIL.map((detail) => {
                                        return <div key={detail.ITEM_DESC}>
                                            <TransactionDetail detail = {detail}/>
                                        </div> 
                                    })
                                }
                            </div>
                            <div id="footer">
                                <div id="finishBtnDiv">
                                    <div className="footerBtn" onClick={() => this.handleOnClick(1)}>Finish</div>
                                </div>
                                <div id="cancelBtnDiv">
                                    <div className="footerBtn" onClick={() => this.handleOnClick(2)}>Cancel</div>
                                </div>
                                
                                <div id="totalBox">
                                    <div id="total">Grand Total</div>
                                    <div id="totalValue">
                                        <CurrencyFormat value={this.GetGrandTotal()} displayType={'text'} thousandSeparator={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(PostSubmit);