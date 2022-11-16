import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BackSvg } from '../assets/ExportImages';
import ProductCard from '../components/ProductCard';
import { getCartFromLocal } from '../services/cartManipulation';

export default class Cart extends Component {
  state = {
    guardProduct: [],
  };

  componentDidMount() {
    this.updateCart();
  }

  updateCart = () => {
    if (localStorage.cartItems) {
      const guardProduct = getCartFromLocal();
      this.setState({ guardProduct });
    }
  };

  render() {
    const { guardProduct } = this.state;

    return (
      <main>
        <Link
          to="/"
        >
          <BackSvg />
          Voltar
        </Link>
        {
          !guardProduct.length ? (
            <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
          ) : (
            guardProduct.map((cartProduct) => (
              <ProductCard
                updateCart={ this.updateCart }
                key={ cartProduct.id }
                { ...cartProduct }
              />
            ))
          )
        }
        <Link to="/checkout" data-testid="checkout-products">Checkout</Link>
      </main>
    );
  }
}
