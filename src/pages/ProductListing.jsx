import React, { Component } from 'react';

export default class ProductListing extends Component {
  state = {
    productList: [],
  };

  render() {
    const { productList } = this.state;

    return (
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
    );
  }
}
