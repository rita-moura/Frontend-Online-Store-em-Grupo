import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/styles/ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const { title, price, thumbnail, id, quantity } = this.props;
    console.log(quantity, window.location.pathname);
    return (
      <Link
        data-testid="product-detail-link"
        to={ `/productdetails/${id}` }
        className="product-card"
      >
        <div data-testid="product">
          <h4 data-testid="shopping-cart-product-name">{ title }</h4>
          <img src={ thumbnail } alt={ title } />
          <h4>{ `R$ ${price}` }</h4>
          {
            quantity
            && (
              <h5
                data-testid="shopping-cart-product-quantity"
              >
                {`Produtos no carrinho: ${quantity}`}
              </h5>)
          }
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
