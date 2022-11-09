import React, { Component } from 'react';
import { getCategories } from '../services/api';
import CartAside from './CartAside';

class AsideCategory extends Component {
  state = {
    guardCategories: [],
  };

  async componentDidMount() {
    const response = await getCategories();
    this.setState({ guardCategories: response });
  }

  render() {
    const { guardCategories } = this.state;

    return (
      <aside>
        <h3>Categorias</h3>
        {guardCategories.map(({ name, id }) => (
          <CartAside
            key={ id }
            name={ name }
          />
        ))}
      </aside>
    );
  }
}

export default AsideCategory;
