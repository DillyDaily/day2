import React from 'react';
import CartHeader from './CartHeader';
import CartItems from './CartItems';
import CartFooter from './CartFooter';

const ShoppingCart = () => {
    return (
        <div>
            <CartHeader />
            <CartItems />
            <CartFooter year="1999"/>
        </div>
    )
}

export default ShoppingCart