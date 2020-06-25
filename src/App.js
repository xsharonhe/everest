import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/home/home.component'
import NavBar from './components/navbar/navbar.component'
import ShopPage from './pages/shop/shop.component'
import LoginPage from './pages/login/login.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css'

import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <NavBar/>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/shop' component={ ShopPage }/>
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? (<Redirect to='/'/>) : (<LoginPage />)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchtoProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchtoProps)
  (App);
