import React from 'react';

import SignIn from '../../components/signin/signin.component'
import NoAccount from '../../components/noaccount/noaccount.components'

import './login.styles.scss';

const LoginPage = () => (
    <div className='login'>
        <SignIn />
        <NoAccount />
    </div>
)

export default LoginPage;