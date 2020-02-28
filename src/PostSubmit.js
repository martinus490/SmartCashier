import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './PostSubmit.css';
import transactionList from './TransactionList';

class PostSubmit extends Component{
    
    transactionData = {
        transactionId: "123456789",
        transactionDetail:[
            {
                productName: "Pasta Gigi",
                quantity: 1,
                price: 2000,
            },
            {
                productName: "Sikat WC",
                quantity: 1,
                price: 4000,
            }
        ]
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users', {
            method: 'post',
            mode: "cors",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({OTP: this.props.location.state.OTP})
        })
        .then(res => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch(console.log)
    }

    render() {
        console.log(this.transactionData);
        return(
            <div className="main">
                <div id="title">TRANSACTION DETAIL</div>
                <div id="detailBox">
                    <div id="transactionId">Transaction ID : {this.transactionData.transactionId}</div>
                    <div id="transactionList">
                        {
                            this.transactionData.transactionDetail.map((detail) => {
                                return(
                                    <div id="transactionListDetail">
                                        <div className="transactionListItem" id="productName">{detail.productName}</div>
                                        <div className="transactionListItem" id="quantity">{detail.quantity}</div>
                                        <div className="transactionListItem" id="price">{detail.price}</div>
                                        <div className="transactionListItem" id="totalPrice">asa</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PostSubmit);