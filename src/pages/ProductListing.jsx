import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AsideCategory from '../components/AsideCategory';
import { CartSvg } from '../assets/ExportImages';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';

export default class ProductListing extends Component {
  state = {
    productList: [],
    searchValue: '',
    searched: false,
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

    this.setState(({
      productList: produtos.results,
      searchValue: '',
      searched: true,
    }));
  };

  render() {
    const { productList, searchValue, searched } = this.state;

    let productsResults = productList.map((productInfos) => (
      <ProductCard
        key={ productInfos.id }
        { ...productInfos }
      />
    ));
    productsResults = productsResults.length ? productsResults
      : <p>Nenhum produto foi encontrado</p>;

    return (
      <main>
        <input
          type="text"
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

        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <CartSvg stroke="blue" />
        </Link>
        {
          (!productList.length && !searched) && (
            <h2
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h2>
          )
        }
        {
          searched && productsResults
        }
        <AsideCategory />
      </main>
    );
  }
}
