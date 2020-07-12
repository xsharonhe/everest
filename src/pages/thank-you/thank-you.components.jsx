import React from 'react'
import { withRouter } from 'react-router-dom';

import Button from '../../components/button/button.component'
import './thank-you.styles.scss'

const ThanksPage = ({ history }) => (
    <div className='container'>
        <div className='success'>
            <h1> You're in! </h1>
            <p> Thank you for signing up with us to receive updates on our latest gear. We love having as part of the everest family.
             Expect updates from us soon!</p>
        </div>
        <div className='button'>
            <Button onClick={() => {
                history.push('/')
            }}> Back to Home Page </Button>
            <Button onClick={() => {
                history.push('/shop')
            }}> Back to Shop Page </Button>
        </div>
    </div>
)

export default withRouter(ThanksPage);