import React, { Component } from 'react'

class AddItem extends Component {

  state = {
    product: 0,
    quantity: 0
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.itemAdded(this.state.product)
  }

  handleProductsList = (e) => {
    this.setState({ product: e.target.value })
  }

  handleQuantityUpdate = (e) => {
    this.setState({ quantity: e.target.value})
  }
  

  render () {
    let productList = this.props.products.map(product => {
      return (
        <option
          key={product.id}
          value={product.id}
        >
          {product.name}
        </option>
      )
    })

    // let quantityList = this.props.quantity.map(quantity => {
    //     return (
    //         <option 
    //             key={quantity.id}
    //             value={quantity.id}
    //             >
    //             { quantity.quantity }
    //             </option>
    //     )
    // })

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col s5">
            <select
              className="browser-default"
              value={this.state.product}
              onChange={this.handleProductsList}
            >
              <option disabled selected>Choose Product</option>
              {productList}
                </select>
                </div>
                <div className="col s5">
                <input type="number" value="quantityAdded" placeholder="Quantity" 
                value={this.state.quantity}
                onChange={this.handleQuantityUpdate}/> 

                </div>
                <div className="col s2">
              <input type="submit" value="Add Item"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddItem