import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home.component'
import ShopPage from './pages/shop.component'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/shop' component={ ShopPage }/>
      </Switch>
    </div>
  );
}

export default App;
