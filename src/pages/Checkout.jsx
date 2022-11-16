import React, { Component } from 'react';
import { clearCart, getCartFromLocal } from '../services/cartManipulation';
import '../assets/styles/Checkout.css';

export default class Checkout extends Component {
  state = {
    cartProducts: [],
    userInfos: {
      fullname: '',
      email: '',
      cpf: '',
      phoneNumber: '',
      cep: '',
      address: '',
      option: '',
    },
  };

  componentDidMount() {
    const cartProducts = getCartFromLocal();
    this.setState({
      cartProducts,
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(({ userInfos }) => ({ userInfos: { ...userInfos, [name]: value } }));
  };

  verifyForm = () => {
    const { userInfos } = this.state;
    const valueUserInfos = Object.values(userInfos);
    return valueUserInfos.some((value) => !value.length);
  };

  handleSubmit = () => {
    clearCart();
  };

  render() {
    const { cartProducts, userInfos } = this.state;
    return (
      <section>
        {
          cartProducts.map((product) => (
            <ul key={ product.id }>{ product.title }</ul>
          ))
        }
        <form action="/" className="form-checkout">
          <div>
            <label htmlFor="fullname">
              Nome Completo:
              <input
                type="text"
                id="fullname"
                data-testid="checkout-fullname"
                name="fullname"
                value={ userInfos.fullname }
                onChange={ this.handleChange }
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                id="email"
                data-testid="checkout-email"
                name="email"
                value={ userInfos.email }
                onChange={ this.handleChange }
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="cpf">
              CPF:
              <input
                type="text"
                id="cpf"
                data-testid="checkout-cpf"
                name="cpf"
                value={ userInfos.cpf }
                onChange={ this.handleChange }
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="phoneNumber">
              Telefone:
              <input
                type="text"
                id="phoneNumber"
                data-testid="checkout-phone"
                name="phoneNumber"
                value={ userInfos.phoneNumber }
                onChange={ this.handleChange }
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="cep">
              CEP:
              <input
                type="text"
                id="cep"
                data-testid="checkout-cep"
                name="cep"
                value={ userInfos.cep }
                onChange={ this.handleChange }
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="address">
              Endereço:
              <input
                type="text"
                id="address"
                data-testid="checkout-address"
                name="address"
                value={ userInfos.address }
                onChange={ this.handleChange }
                required
              />
            </label>
          </div>
          <div>
            <p>Método de pagamento:</p>
            <label htmlFor="boleto">
              Boleto:
              <input
                type="radio"
                id="boleto"
                data-testid="ticket-payment"
                name="option"
                value="boleto"
                onChange={ this.handleChange }
                required
              />
            </label>
            <label htmlFor="visa">
              Visa:
              <input
                type="radio"
                id="visa"
                data-testid="visa-payment"
                name="option"
                value="visa"
                onChange={ this.handleChange }
                required
              />
            </label>
            <label htmlFor="MasterCard">
              MasterCard:
              <input
                type="radio"
                id="MasterCard"
                data-testid="master-payment"
                name="option"
                value="masterCard"
                onChange={ this.handleChange }
                required
              />
            </label>
            <label htmlFor="elo">
              Elo:
              <input
                type="radio"
                id="elo"
                data-testid="elo-payment"
                name="option"
                value="elo"
                onChange={ this.handleChange }
                required
              />
            </label>
          </div>
          <button
            type="submit"
            data-testid="checkout-btn"
            onClick={ this.handleSubmit }
          >
            Finalizar

          </button>
          {
            this.verifyForm()
            && <p data-testid="error-msg" className="error-msg">Campos inválidos</p>
          }
        </form>
      </section>
    );
  }
}
