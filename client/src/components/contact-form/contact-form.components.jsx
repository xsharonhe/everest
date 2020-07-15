import React from 'react';

import Button from '../button/button.component'

import './contact-form.styles.scss'

class ContactForm extends React.Component {
    state={
        email: '',
        name: ''
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.email) {
            fetch(`/api/memberAdd?email=${ this.state.email }`)
            .then(res => res.json())
            .then(json => {
                if (json.status === "subscribed") {
                    this.props.configureNotification("success")
                } else if (json.title === 'Member Exists'){
                    this.props.configureNotification("warning")
                } else {
                    this.props.configureNotification("error")
                }
                this.props.showNotification();
            })
            .catch(err => {
                console.log("error", err)
            })

            this.setState({ email: '', name: ''})
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
  
        this.setState({ [name]: value });
    }

    render() {

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
                            <Button type='submit' value='Submit-Form'> Submit Form </Button>
                        </div> 
                </form> 
            </div>
        )
    }
}

export default ContactForm;
