import React from 'react';

import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/signup/signup.component'

import './login.styles.scss';

const LoginPage = () => (
    <div className='login'>
        <SignIn />
        <SignUp />
    </div>
)

export default LoginPage;