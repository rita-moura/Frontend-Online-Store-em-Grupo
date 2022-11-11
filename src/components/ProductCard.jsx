import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/styles/ProductCard.css';
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from '../services/cartManipulation';

export default class ProductCard extends Component {
  render() {
    const { title, price, thumbnail, id, quantity, updateCart } = this.props;
    return (
      <section>
        <Link
          data-testid="product-detail-link"
          to={ `/productdetails/${id}` }
          className="product-card"
        >
          <div data-testid="product">
            <h4 data-testid="shopping-cart-product-name">{ title }</h4>
            <img src={ thumbnail } alt={ title } />
            <h4>{ `R$ ${price}` }</h4>
          </div>
        </Link>
        {
          quantity
          && (
            <section>
              <button
                data-testid="remove-product"
                type="button"
                onClick={ () => {
                  removeProduct(this.props);
                  updateCart();
                } }
              >
                Remover produto
              </button>
              <button
                data-testid="product-decrease-quantity"
                type="button"
                onClick={ () => {
                  decreaseQuantity(this.props);
                  updateCart();
                } }
              >
                -
              </button>
              <h5
                data-testid="shopping-cart-product-quantity"
              >
                {`Produtos no carrinho: ${quantity}`}
              </h5>
              <button
                data-testid="product-increase-quantity"
                type="button"
                onClick={ () => {
                  increaseQuantity(this.props);
                  updateCart();
                } }
              >
                +
              </button>
            </section>
          )
        }
      </section>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
