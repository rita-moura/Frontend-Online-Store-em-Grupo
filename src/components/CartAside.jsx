import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartAside extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <label htmlFor="category" data-testid="category">
          <input type="radio" id="category" />
          { name }
        </label>
      </div>
    );
  }
}

CartAside.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CartAside;
