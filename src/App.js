import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Learning from './Learning';
import ShoppingCart from './ShoppingCart';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
