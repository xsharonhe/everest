import React from 'react';

import './form-layout.styles.scss';

const FormLayout = ({ handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input 
            className='form-input' 
            onChange= { handleChange } 
            { ...otherProps } />
        { 
            label ? 
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            { label }
            </label>)
            :null
        }
    </div>
)

export default FormLayout;