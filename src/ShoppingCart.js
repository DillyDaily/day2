import React from 'react';
import CartHeader from './CartHeader';
import CartItems from './CartItems';
import CartFooter from './CartFooter';
import AddItem from './AddItem';

class ShoppingCart extends React.Component {

    handleItemAdded = (id) => {
       console.log('handledItemAdded was called & passed the id: ', id)
    }

    render () {
        console.log('shoppingcart component', this)
    return (
        <div>
            <CartHeader />
            <CartItems items={ this.props.items } />
            <AddItem products={ this.props.products } 
                    itemAdded={ this.handleItemAdded }  
                    quantity={ this.props.items.quantity }
                    quantityAdded={ this.handleQuantityAdded }

            />

            <CartFooter year={ this.props.year }/>
        </div>
    )
  }
}

export default ShoppingCart