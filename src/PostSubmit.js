import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './PostSubmit.css';
import TransactionDetail from './TransactionDetail';

class PostSubmit extends Component{
    transactionData = {
        transactionId: "123456789",
        transactionDetail:[
            {
                productName: "Pasta Gigi",
                quantity: 3,
                price: 2000,
            },
            {
                productName: "Sikat WC",
                quantity: 1,
                price: 4000,
            },
            {
                productName: "Sikat WC",
                quantity: 1,
                price: 4000,
            },
            {
                productName: "Sikat WC",
                quantity: 1,
                price: 4000,
            },
            {
                productName: "Sikat WC",
                quantity: 1,
                price: 4000,
            },
            {
                productName: "Sikat WC",
                quantity: 1,
                price: 4000,
            },
            {
                productName: "Sikat WC",
                quantity: 1,
                price: 4000,
            },
            {
                productName: "Sikat WC",
                quantity: 1,
                price: 4000,
            },
            {
                productName: "Sikat WC",
                quantity: 4,
                price: 4000,
            },
            {
                productName: "Sikat WC",
                quantity: 4,
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
                        <div id="transactionDetail">
                            {
                                this.transactionData.transactionDetail.map((detail) => {
                                    return <TransactionDetail detail = {detail}/>
                                })
                            }
                        </div>
                        <div id="grandTotal"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PostSubmit);