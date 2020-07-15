import React from 'react'
import { withRouter } from 'react-router-dom'

import Button from '../button/button.component'

const NoAccount = ({ history }) => (
    <div className='no-account'>
        <h2> I don't have any account</h2>
        <span> Sign Up Here</span>
        <Button onClick={() => {
            history.push('/signup')
        }}> Sign Up </Button>
    </div>
)

export default withRouter(NoAccount);