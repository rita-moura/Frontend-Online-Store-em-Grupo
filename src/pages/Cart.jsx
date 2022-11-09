import React, { Component } from 'react';

export default class Cart extends Component {
  state = {
    CartState: [],
  };

  render() {
    const { CartState } = this.state;

    return (
      <main>
        {
          !CartState.length ? (
            <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
          ) : (
            CartState.map((cartProduct, index) => (
              <div key={ index }>Generic Message</div>
            ))
          )
        }
      </main>
    );
  }
}
