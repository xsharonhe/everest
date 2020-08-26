import React, { useState } from 'react';

import FormLayout from '../../pages/form-layout/form-layout.component'
import Button from '../button/button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './signin.styles.scss'

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setCredentials({ email: '' })
        } catch(error) {
            console.log(error)
        }

        setCredentials({ email: '', password: ''});
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className='sign-in'> 
            <h2> I already have an account. </h2>
            <span> Sign in with your email and password. </span>

            <form onSubmit={handleSubmit}>
                <FormLayout name="email" 
                    type="email" 
                    value={ email } 
                    label="email"
                    handleChange={ handleChange }
                    required/>
                <FormLayout name='password' 
                    type="password" 
                    value={ password }
                    label="password"
                    handleChange={ handleChange } 
                    required/>    
                <div className='buttons'>
                    <Button type='submit' value='Submit Form'> Sign In </Button>
                    <Button type='button' onClick={ signInWithGoogle } isGoogleSignIn>  
                        Google Sign In  </Button>
                </div>         
            </form> 
        </div>
    )

}

export default SignIn;