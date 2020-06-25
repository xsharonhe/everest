import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import { auth } from '../../firebase/firebase.utils'

import './navbar.styles.scss'

const NavBar = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/> 
        </Link>
        <div className='navbar-options'>
            <Link className='option' to='/shop'> SHOP </Link>
            <Link className='option' to='/contact'> CONTACT </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => {
                    auth.signOut();
                }}> SIGN OUT </div>
                :
                <Link className='option' to="/signin"> SIGN IN </Link>
            }
            <CartIcon />
        </div>
    </div>
)

const mapStatetoProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStatetoProps)(NavBar);