import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import { HeaderContainer, LogoContainer, LogoImageContainer, OptionsContainer, OptionsLink } from './navbar.styles'

const NavBar = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <LogoImageContainer/> 
        </LogoContainer>
        <OptionsContainer>
            <OptionsLink to='/shop'> SHOP </OptionsLink>
            <OptionsLink to='/contact'> CONTACT </OptionsLink>
            {
                currentUser ? 
                <OptionsLink as='div' onClick={() => {
                    auth.signOut();
                }}> SIGN OUT </OptionsLink>
                :
                <OptionsLink to="/signin"> SIGN IN </OptionsLink>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
)

const mapStateToProps = 
    createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
})

export default connect(mapStateToProps)(NavBar);