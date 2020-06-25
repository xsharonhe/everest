import React from 'react';

import FormLayout from '../../pages/form-layout/form-layout.component'
import CustomButton from '../button/button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './signin.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '' })
        } catch(error) {
            console.log(error)
        }

        this.setState( { email: '', password: ''} )
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render () {
        return (
            <div className='sign-in'> 
                <h2> I already have an account. </h2>
                <span> Sign in with your email and password. </span>

                <form onSubmit={this.handleSubmit}>
                    <FormLayout name="email" 
                        type="email" 
                        value={ this.state.email } 
                        label="email"
                        handleChange={ this.handleChange }
                        required/>
                    <FormLayout name='password' 
                        type="password" 
                        value={ this.state.password }
                        label="password"
                        handleChange={ this.handleChange } 
                        required/>    
                    <div className='buttons'>
                        <CustomButton type='submit' value='Submit Form'> Sign In </CustomButton>
                        <CustomButton type='button' onClick={ signInWithGoogle } isGoogleSignIn>  
                            Sign In With Google  </CustomButton>
                    </div>         
                </form> 
            </div>
        )
    }

}

export default SignIn;