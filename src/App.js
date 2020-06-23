import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home/home.component'
import NavBar from './components/navbar/navbar.component'
import ShopPage from './pages/shop/shop.component'
import LoginPage from './pages/login/login.component'
import { auth } from './firebase/firebase.utils'
import './App.css'

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ current_user: user}) 
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
