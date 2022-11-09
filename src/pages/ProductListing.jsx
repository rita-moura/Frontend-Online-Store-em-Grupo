import React, { Component } from 'react';
import AsideCategory from '../components/AsideCategory';

export default class ProductListing extends Component {
  state = {
    productList: [],
  };

  render() {
    const { productList } = this.state;

    return (
      <main>
        <section>
          <input type="text" />
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
        <AsideCategory />
      </main>
    );
  }
}
