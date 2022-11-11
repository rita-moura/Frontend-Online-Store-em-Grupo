import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartAside extends Component {
  render() {
    const { name, id, handleChange } = this.props;
    return (
      <div>
        <label htmlFor={ id } data-testid="category">
          <input
            type="radio"
            id={ id }
            name="cartegorySelected"
            value={ id }
            onChange={ handleChange }
          />
          { name }
        </label>
      </div>
    );
  }
}

CartAside.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;
