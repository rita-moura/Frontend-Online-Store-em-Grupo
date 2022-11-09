import React, { Component } from 'react';

class AsideCategory extends Component {
  render() {
    return (
      <aside>
        <h3>Categorias</h3>
        <label htmlFor="category" data-testid="category">
          <input type="radio" id="category" />
        </label>
      </aside>
    );
  }
}

export default AsideCategory;
