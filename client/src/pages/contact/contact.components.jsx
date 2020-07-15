import React from 'react'
import { withRouter } from 'react-router-dom';

import Description from '../../components/description/description.components'
import ContactForm from '../../components/contact-form/contact-form.components'
import './contact.styles.scss'

import check from '../../assets/checkmark.svg'
import x from '../../assets/x.svg'
import exclamation from '../../assets/warning.svg'

class ContactPage extends React.Component {
    state = {
        notification: {
            src: '',
            alt: '',
            message: '',
            level: '',
            visible: false,
        }
    }

    showNotification = () => {
        const notification = { ...this.state.notification };
        notification.visible = true;
        this.setState({ notification }, () => {
            setTimeout(() => {
                notification.visible = false;
            }, 3000);
        })

    }

    configureNotification = level => {
        const notification = { ...this.state.notification };
        const { history } = this.props;
        notification.level = level;
        if (level === 'success') {
            notification.src = check;
            notification.alt = 'Check Mark';
            notification.message = "Thank you for subscribing to our mailing list. You will be receiving a welcome email shortly."
            setTimeout(() => {
                history.push('/thankyou')
                }, 2000)
        } else if (level === 'warning') {
            notification.src = exclamation;
            notification.alt = 'Exclamation Point';
            notification.message = "The email has already been entered. Thank you for being apart of our community!"
        } else {
            notification.src = x;
            notification.alt = 'X';
            notification.message = "There was an error in your submission. Please check your email address and try again."
        }
        this.setState({ notification })
    }

    render() {
        const { notification } = this.state;
        return(
            <div className='contact-form'>
                <ContactForm showNotification={ this.showNotifciation }
                    configureNotification={ this.configureNotification }/>
                <Description src={ notification.src }
                    alt={ notification.alt } message={ notification.message }
                    level={ notification.level } visible={ notification.visible }/>
            </div>
        )
    }
}
export default withRouter(ContactPage);