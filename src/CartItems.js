
import React from 'react';
import CartItem from './CartItem';

const CartItems = (props) => {
    console.log('cart item props', props)
    let itemList = props.items.map(item => <CartItem key={item.id} item={item} />)

    return (
        <div className="container">
            <h1>Items</h1>

        <div className="collection">
            <div className="collection-item row grey lighten-3">
                <div className="col s8">Product</div>
                <div className="col s2">Price</div>
                <div className="col s2">Quantity</div>
                 </div>
                 {itemList}
          </div>
      </div>
    )
}

export default CartItems
