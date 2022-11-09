import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BackSvg } from '../assets/ExportImages';

export default class Cart extends Component {
  state = {
    CartState: [],
  };

  render() {
    const { CartState } = this.state;

    return (
      <main>
        <Link
          to="/"
        >
          <BackSvg />
          Voltar
        </Link>
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
