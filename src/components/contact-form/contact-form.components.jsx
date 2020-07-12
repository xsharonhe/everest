import React from 'react';

import FormLayout from '../../pages/form-layout/form-layout.component'
import CustomButton from '../button/button.component'
import { auth } from '../../firebase/firebase.utils'

import './contact-form.styles.scss'

class ContactForm extends React.Component {
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
            <div className='contact-us'> 
                <h2> I would love to receive more news and updates! </h2>
                <span> Sign in with your email and password. </span>

                <form onSubmit={ this.handleSubmit }>
                    <FormLayout name="text"/>
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
                        <CustomButton type='submit' value='Submit Form'> Submit Form </CustomButton>
                    </div>         
                </form> 
            </div>
        )
    }

}

export default ContactForm;