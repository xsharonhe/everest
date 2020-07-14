import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import StripeCheckout from 'react-stripe-checkout'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { removeAllItems } from '../../redux/cart/cart.actions'

const StripeCheckoutButton = ({ price, history, dispatch }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51H0Zt7Hagg9Xnev16tP9n0FjVh6emtjX52zfaQJGKpKh8RgnWzIktM41NF4JHR1cFHPCQiztvpGXArXkoZlqK45t00BSAGlS6v'
    const onToken = token => {
        axios({ 
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(res => {
            history.push('/checkout/paymentconfirmed')
            dispatch(removeAllItems())
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment.')
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='everest'
            billingAddress
            shippingAddress
            image='http://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
            description={`Your total is $${ price }.`}
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }
        />
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: removeAllItems
})

export default withRouter(connect(mapStateToProps)(StripeCheckoutButton));