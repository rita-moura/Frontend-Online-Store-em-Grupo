import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DetailsCart from '../components/DetailsCart';
import { BackSvg } from '../assets/ExportImages';
import { getProductById } from '../services/api';
import { addCartItem } from '../services/cartManipulation';

export default class ProductDetails extends Component {
  state = {
    guardProducts: [],
    email: '',
    rating: '',
    erro: false,
    text: '',
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const product = await getProductById(id);
    this.setState({ guardProducts: product });
  }

  validateForm = () => {
    const { email, rating } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const verifyEmail = email.length === 0;
    const verify = !regex.test(email);
    const verifyRating = rating.length === 0;
    const verifyTotal = verifyEmail || verifyRating || verify;
    this.setState({ erro: verifyTotal }, this.setProductEvaluation());
  };

  handleClick = (event) => {
    event.preventDefault();
    this.validateForm();
    // const { erro } = this.state;
    // if (erro) return
    this.setProductEvaluation();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  getProductEvaluation = () => {
    const { match } = this.props;
    const { id } = match.params;
    if (!localStorage[id]) {
      localStorage.setItem(id, '[]');
    }
    return JSON.parse(localStorage.getItem(id));
  };

  setProductEvaluation = () => {
    const { email, text, rating, erro } = this.state;
    if (erro) return;
    const { match } = this.props;
    const { id } = match.params;
    const savedProductEvaluation = this.getProductEvaluation();
    savedProductEvaluation.push({ email, text, rating });
    localStorage.setItem(id, JSON.stringify(savedProductEvaluation));
  };

  render() {
    const { guardProducts, erro, email, text } = this.state;
    const array = [];
    const MAX_NUMBER = 5;
    for (let index = 1; index <= MAX_NUMBER; index += 1) {
      array.push(
        <label
          htmlFor={ `${index}-rating` }
          data-testid={ `${index}-rating` }
        >
          <input
            type="radio"
            name="rating"
            value={ index }
            id={ `${index}-rating` }
            onChange={ this.handleChange }
          />
          {index}
        </label>,
      );
    }

    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <BackSvg />
          Carrinho de compras
        </Link>
        <h1>Descrição do Produto</h1>
        <DetailsCart
          { ...guardProducts }
        />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addCartItem(guardProducts) }
        >
          Adicionar ao carrinho
        </button>
        <form>
          <input
            type="email"
            data-testid="product-detail-email"
            name="email"
            value={ email }
            placeholder="email"
            onChange={ this.handleChange }
          />
          { array }
          <div>
            <textarea
              data-testid="product-detail-evaluation"
              name="text"
              value={ text }
              cols="30"
              rows="10"
              onChange={ this.handleChange }
            />
          </div>
          <div>
            <button
              data-testid="submit-review-btn"
              type="submit"
              onClick={ this.handleClick }
            >
              Enviar
            </button>
          </div>
        </form>
        { erro && <p data-testid="error-msg">Campos inválidos</p> }
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
