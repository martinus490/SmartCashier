import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import './TransactionDetail.css'

class TransactionDetail extends Component{
    render(){
        const productName = this.props.detail.ITEM_DESC;
        const price = Number(this.props.detail.BASE_PRICE);
        const quantity = Number(this.props.detail.QUANTITY);
        return(
            <div id="transactionListDetail">
                <div className="transactionListItem" id="productName">{productName}</div>
                <div className="transactionListItem" id="quantity">{quantity}</div>
                <div className="transactionListItem" id="price">
                   <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} />
                </div>
                <div className="transactionListItem" id="totalPrice">
                    <CurrencyFormat value={quantity * price} displayType={'text'} thousandSeparator={true} />
                </div>
            </div>
        );
    }
}

export default TransactionDetail;