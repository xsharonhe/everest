import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/logo.svg'

import './navbar.styles.scss'

const NavBar = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/> 
        </Link>
        <div className='navbar-options'>
            <Link className='option' to='/shop'> SHOP </Link>
            <Link className='option' to='/contact'> CONTACT </Link>
        </div>
    </div>
)

export default NavBar;