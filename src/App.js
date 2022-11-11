import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import './assets/styles/GeneralStyles.css';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ ProductListing }
      />
      <Route
        exact
        path="/cart"
        component={ Cart }
      />
      <Route
        exact
        path="/productdetails/:id"
        component={ ProductDetails }

      />
    </Switch>
  );
}

export default App;
