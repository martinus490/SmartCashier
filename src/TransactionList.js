import React from 'react';

const transactionList = (props) => {
    return(
        <div id="transactionListDetail">
            <div className="transactionListItem" id="productName">{props.productName}</div>
            <div className="transactionListItem" id="quantity">{props.quantity}</div>
            <div className="transactionListItem" id="price">{props.price}</div>
            <div className="transactionListItem" id="totalPrice">asa</div>
        </div>
    );
}

export default transactionList;