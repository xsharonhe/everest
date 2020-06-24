import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home/home.component'
import NavBar from './components/navbar/navbar.component'
import ShopPage from './pages/shop/shop.component'
import LoginPage from './pages/login/login.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      }
      this.setState({ currentUser: userAuth})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <NavBar currentUser={this.state.currentUser}/>
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
