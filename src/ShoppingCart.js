import React from 'react';
import CartHeader from './CartHeader';
import CartItems from './CartItems';
import CartFooter from './CartFooter';

const ShoppingCart = (props) => {
    return (
        <div>
            <CartHeader />
            <CartItems items={props.items} />
            <CartFooter year={props.year}/>
        </div>
    )
}

export default ShoppingCart