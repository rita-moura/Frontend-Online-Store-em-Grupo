import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DetailsCart extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <h4 data-testid="product-detail-name">{ title }</h4>
        <img data-testid="product-detail-image" src={ thumbnail } alt={ title } />
        <h4 data-testid="product-detail-price">{ `R$ ${price}` }</h4>
      </div>
    );
  }
}

DetailsCart.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
