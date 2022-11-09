import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductListing extends Component {
  state = {
    productList: [],
  };

  render() {
    const { productList } = this.state;

    return (
      <section>
        <input type="text" />
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          Cart
        </Link>
        {
          !productList.legth
            ? (
              <h2
                data-testid="home-initial-message"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.
              </h2>
            ) : (
              productList.map((product, index) => (
                <div key={ index }>Generic message</div>
              ))
            )
        }
      </section>
    );
  }
}
