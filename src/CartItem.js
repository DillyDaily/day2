import React from 'react';

const CartItem = (props) => {
    console.log('cart item props ', props)

    let { name, priceInCents } = props.item.product;

    return (
     <div className="collection-item">
       <div className="row">
        <div className="col s8">{name}</div>
        <div className="col s2">${(priceInCents/100).toFixed(2)}</div>
        <div className="col s2">{props.item.quantity}</div>
      </div>
    </div>
    )
   }

export default CartItem