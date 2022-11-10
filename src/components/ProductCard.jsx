import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <Link data-testid="product-detail-link" to={ `/productdetails/${id}` }>
        <div data-testid="product">
          <h4>{ title }</h4>
          <img src={ thumbnail } alt={ title } />
          <h4>{ `R$ ${price}` }</h4>
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
