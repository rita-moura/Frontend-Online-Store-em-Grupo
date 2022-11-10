import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DetailsCart from '../components/DetailsCart';
import { BackSvg } from '../assets/ExportImages';
import { getProductById } from '../services/api';

export default class ProductDetails extends Component {
  state = {
    guardProducts: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const product = await getProductById(id);
    this.setState({ guardProducts: product });
  }

  render() {
    const { guardProducts } = this.state;

    return (
      <div>
        <h1>Descrição do Produto</h1>
        <DetailsCart
          { ...guardProducts }
        />
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <BackSvg />
          Voltar
        </Link>
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
