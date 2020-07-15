import React from 'react'
import { withRouter } from 'react-router-dom'

import Button from '../button/button.component'
import './noaccount.styles.scss'

const NoAccount = ({ history }) => (
    <div className='no-account'>
        <h2> I don't have an account</h2>
        <span> <em> Sign Up Here </em> </span>
        <div className='buttons'>
            <Button onClick={() => {
                history.push('/signup')
            }}> Sign Up </Button>
        </div>
    </div>
)

export default withRouter(NoAccount);