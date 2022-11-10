import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AsideCategory from '../components/AsideCategory';
import { CartSvg } from '../assets/ExportImages';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductListing extends Component {
  state = {
    productList: [],
    searchValue: '',
    produtos: [],
  };

  productSearch = ({ target }) => {
    const { value } = target;
    this.setState(({
      searchValue: value,
    }));
  };

  search = async (event) => {
    event.preventDefault();
    const { searchValue } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(null, searchValue);
    console.log(produtos.results);
    this.setState(({
      produtos: produtos.results,
      searchValue: '',
    }));
  };

  render() {
    const { productList, searchValue, produtos } = this.state;

    return (
      <main>
        <input
          data-testid="query-input"
          onChange={ this.productSearch }
          value={ searchValue }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.search }
        >
          Buscar
        </button>
        { produtos.length > 0 ? produtos.map(({ title, price, id }) => (
          <div data-testid="product" key={ id }>
            <h2>{ title }</h2>
            <h2>{ price }</h2>
          </div>
        ))
          : <p>Nenhum produto foi encontrado</p>}

        <section>
          <input type="text" />
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            <CartSvg stroke="blue" />
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
        <AsideCategory />
      </main>
    );
  }
}
