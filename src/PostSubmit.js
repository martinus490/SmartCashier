import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './PostSubmit.css';

class PostSubmit extends Component{
    componentDidMount() {
        //fetch('http://192.168.43.10:6969/getTransactionDetail', {
        fetch('http://192.168.43.10:6969/closeTransaction', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({txnId: '4', grandPrice: '2000'})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log())
    }

    render() {
        return(
            <div className="main">
                <div id="title">TRANSACTION DETAIL</div>
                <div id="detailBox">
                    <div id="transactionId">Transaction ID: </div>
                    <div id="transactionList">

                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PostSubmit);