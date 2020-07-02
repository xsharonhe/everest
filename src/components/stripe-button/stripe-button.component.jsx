import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

import Logo from '../../assets/logo.svg'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51H0Zt7Hagg9Xnev16tP9n0FjVh6emtjX52zfaQJGKpKh8RgnWzIktM41NF4JHR1cFHPCQiztvpGXArXkoZlqK45t00BSAGlS6v'
    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='everest'
            billingAddress
            shippingAddress
            image={ Logo }
            description={`Your total is $${ price }.`}
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }
        />
    )
}

export default StripeCheckoutButton;