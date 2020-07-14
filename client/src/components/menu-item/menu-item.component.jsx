import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({ title, imageURL, size, history, match, linkURL }) => ( 
  <div 
    className={`${ size } menu-item`} 
    onClick={() => history.push(`${match.url}${linkURL}`)}
  >
    <div 
      className='background-image' 
      style={{
        backgroundImage:`url(${imageURL})`
      }}
    >
    </div>
      <div className='layout'>
        <h1 className='title'> { title.toUpperCase() } </h1>
        <span className='caption'>SHOP NOW</span>
      </div>
  </div>
);


export default withRouter(MenuItem);