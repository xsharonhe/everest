import React from 'react';
import Notification from '../notification/notification.components'

const Description = ({...otherProps }) => {
    return (
        <div className="description">
            <Notification { ...otherProps }/>
        </div>
    )
}

export default Description;