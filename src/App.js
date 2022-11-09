import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import ProductListing from './pages/ProductListing';

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
    </Switch>
  );
}

export default App;
