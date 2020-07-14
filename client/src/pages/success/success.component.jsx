import React from 'react'
import { withRouter } from 'react-router-dom';

import Button from '../../components/button/button.component'
import './success.styles.scss'

const SuccessPage = ({ history }) => (
    <div className='container'>
        <div className='success'>
            <h1> Your payment was a success! </h1>
            <p> Thank you for purchasing with us. An email will be sent soon to confirm your purchase.
             We hope you enjoy our product! If you have any questions, feel free to visit our contact page. </p>
        </div>
        <div className='button'>
            <Button onClick={() => {
                history.push('/')
            }}> Back to Home Page </Button>
        </div>
    </div>
)

export default withRouter(SuccessPage);