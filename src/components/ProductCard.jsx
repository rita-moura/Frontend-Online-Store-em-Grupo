import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { title, price } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <h2>{ price }</h2>
      </div>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
