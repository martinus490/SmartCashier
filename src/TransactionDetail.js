import React, { Component } from 'react';
import './TransactionDetail.css'

class TransactionDetail extends Component{
    render(){
        const productName = this.props.detail.productName;
        const price = Number(this.props.detail.price);
        const quantity = Number(this.props.detail.quantity);
        return(
            <div id="transactionListDetail">
                <div className="transactionListItem" id="productName">{productName}</div>
                <div className="transactionListItem" id="quantity">{quantity}</div>
                <div className="transactionListItem" id="price">{price}</div>
                <div className="transactionListItem" id="totalPrice">{quantity * price}</div>
            </div>
        );
    }
}

export default TransactionDetail;