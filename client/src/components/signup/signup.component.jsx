import React, { useState } from 'react';

import FormLayout from '../../pages/form-layout/form-layout.component'
import Button from '../button/button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './signup.styles.scss'

const SignUp = () => {
    const [userCredentials, setCredentials] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
      event.preventDefault();
  
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
  
        setCredentials({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleChange = event => {
      const { name, value } = event.target;
  
      setCredentials(...userCredentials, { [name]: value });
    };
  
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormLayout
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display your name'
            required
          />
          <FormLayout
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormLayout
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormLayout
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
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
  
  export default SignUp;