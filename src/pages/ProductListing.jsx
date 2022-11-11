import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AsideCategory from '../components/AsideCategory';
import { CartSvg } from '../assets/ExportImages';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import '../assets/styles/Header.css';

export default class ProductListing extends Component {
  state = {
    productList: [],
    searchValue: '',
    searched: false,
    cartegorySelected: '',
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

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, async () => {
      const { cartegorySelected } = this.state;
      const productList = await getProductsFromCategoryAndQuery(cartegorySelected, null);
      this.setState({
        productList: productList.results,
        searched: true,
      });
    });
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
        <header className="Header">
          <form className="search-form" onSubmit={ this.search }>
            <input
              className="search-form-input"
              type="text"
              data-testid="query-input"
              onChange={ this.productSearch }
              value={ searchValue }
              placeholder="Digite o que você busca"
            />
            <button
              className="search-form-button"
              data-testid="query-button"
              type="button"
              onClick={ this.search }
            >
              Buscar
            </button>
          </form>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            <CartSvg stroke="blue" />
          </Link>
        </header>
        {
          (!productList.length && !searched) && (
            <h3
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </h3>
          )
        }
        {
          searched && productsResults
        }
        <AsideCategory handleChange={ this.handleChange } />
      </main>
    );
  }
}
