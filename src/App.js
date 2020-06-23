import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home/home.component'
import NavBar from './components/navbar/navbar.component'
import ShopPage from './pages/shop/shop.component'
import LoginPage from './pages/login/login.component'
import './App.css'

function App() {
  return (
    <div>
    <NavBar />
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/shop' component={ ShopPage }/>
        <Route path='/signin' component = { LoginPage }/>
      </Switch>
    </div>
  );
}

export default App;
