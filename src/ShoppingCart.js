import React from 'react';
import CartHeader from './CartHeader';
import CartItems from './CartItems';
import CartFooter from './CartFooter';

const ShoppingCart = () => {
    return (
        <div>
            <CartHeader />
            <CartItems />
            <CartFooter />
        </div>
    )
}

export default ShoppingCart