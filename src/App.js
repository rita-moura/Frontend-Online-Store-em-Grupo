import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProductListing from './pages/ProductListing';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ ProductListing }
      />
    </Switch>
  );
}

export default App;
