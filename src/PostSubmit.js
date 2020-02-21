import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './PostSubmit.css';

class PostSubmit extends Component{
    render() {
        return(
            <div className="main">
                <div id="title">TRANSACTION DETAIL</div>
                <div id="detailBox">
                    <div id="transactionId">Transaction ID: </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PostSubmit);