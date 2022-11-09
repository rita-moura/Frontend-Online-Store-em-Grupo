import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
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
