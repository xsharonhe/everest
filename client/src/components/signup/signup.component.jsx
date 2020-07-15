import React from 'react';

import FormLayout from '../../pages/form-layout/form-layout.component'
import Button from '../button/button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './signup.styles.scss'

class SignUp extends React.Component {
    constructor() {
      super();
  
      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    }
  
    handleSubmit = async event => {
      event.preventDefault();
  
      const { displayName, email, password, confirmPassword } = this.state;
  
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
  
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
  
        await createUserProfileDocument(user, { displayName });
  
        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch (error) {
        console.error(error);
      }
    };
  
    handleChange = event => {
      const { name, value } = event.target;
  
      this.setState({ [name]: value });
    };
  
    render() {
      const { displayName, email, password, confirmPassword } = this.state;
      return (
        <div className='sign-up'>
          <h2 className='title'>I do not have a account</h2>
          <span>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormLayout
              type='text'
              name='displayName'
              value={displayName}
              onChange={this.handleChange}
              label='Display your name'
              required
            />
            <FormLayout
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
              label='Email'
              required
            />
            <FormLayout
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
              label='Password'
              required
            />
            <FormLayout
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={this.handleChange}
              label='Confirm password'
              required
            />
            <div className='buttons-container'>
              <Button type='submit'>SIGN UP</Button>
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default SignUp;