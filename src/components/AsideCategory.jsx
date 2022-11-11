import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import AsideCart from './AsideCart';
import '../assets/styles/AsideCategory.css';

export default class AsideCategory extends Component {
  state = {
    guardCategories: [],
  };

  async componentDidMount() {
    const response = await getCategories();
    this.setState({ guardCategories: response });
  }

  render() {
    const { guardCategories } = this.state;
    const { handleChange } = this.props;

    return (
      <aside className="categories">
        <h3>Categorias</h3>
        {guardCategories.map(({ name, id }) => (
          <AsideCart
            key={ id }
            name={ name }
            id={ id }
            handleChange={ handleChange }
          />
        ))}
      </aside>
    );
  }
}

AsideCategory.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
