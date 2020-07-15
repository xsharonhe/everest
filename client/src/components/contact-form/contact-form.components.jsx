import React from 'react';
import axios from 'axios';

import Button from '../button/button.component'
import { withRouter } from 'react-router-dom';
import { createSubscriptionPage } from '../../firebase/firebase.utils'

import './contact-form.styles.scss'

class ContactForm extends React.Component {
    state={
        email: '',
        name: ''
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.email) {
            axios.get(`/api/memberAdd`, {
                params: {
                    email: this.state.email
                }
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
  
        this.setState({ [name]: value });
    }

    render() {
        const { history } = this.props;

        return (
            <div className='contact-us'>
                <h1> Contact Us! </h1> 
                <h2> I would love to receive more news and updates! </h2>
                <span> <em> Sign up with your name and email. </em> </span>
                <form className='subscribe' onSubmit={ this.handleSubmit }>
                    <input className='subscribe-email'
                        name="name"
                        type='text'
                        placeholder="Enter your name!"
                        onChange={ this.handleChange }
                        value ={ this.state.name }
                        required/>
                    <input className='subscribe-email'
                        name="email"
                        type="email"
                        placeholder="Enter your email address!"
                        onChange={ this.handleChange }
                        value={ this.state.email }
                        required/>
                        <div className='buttons'>
                            <Button type='submit' value='Submit-Form' onClick={() => {
                                     history.push('/thankyou')
                                 }}> Submit Form </Button>
                        </div> 
                </form> 
            </div>
        )
    }
}
// class ContactForm extends React.Component {
    // onClick={() => {
    //     history.push('/thankyou')
    // }}
//     constructor(props) {
//         super(props);

//         this.state = {
//             displayName: '',
//             email: '',
//             password: ''
//         }
//     }
    
//     handleSubmit = async event => {
//         event.preventDefault();
    
//         const { displayName, email } = this.state;
    
//           await createSubscriptionPage(displayName, email);
    
//           this.setState({
//             displayName: '',
//             email: ''
//           });
//       };

//     handleChange = event => {
//         const { value, name } = event.target;

//         this.setState({ [name]: value })
//     }

//     render () {
//         const { history } = this.props;
//         return ( 
//             <div className='contact-us'>
//                 <h1> Contact Us </h1> 
//                 <h2> I would love to receive more news and updates! </h2>
//                 <span> Sign up with your name and email. </span>

//                 <form onSubmit={ this.handleSubmit }>
//                     <FormLayout name="displayName" 
//                         type="text" 
//                         value={ this.state.displayName } 
//                         label="name"
//                         handleChange={ this.handleChange }
//                         required/>
//                     <FormLayout name="email" 
//                         type="email" 
//                         value={ this.state.email } 
//                         label="email"
//                         handleChange={ this.handleChange }
//                         required/> 
//                     <div className='buttons'>
//                         <Button type='submit' value='Submit-Form' onClick={() => {
//                             history.push('/thankyou')
//                         }}> Submit Form </Button>
//                     </div>         
//                 </form> 
//             </div>
//         )
//     }

// }

export default withRouter(ContactForm);
