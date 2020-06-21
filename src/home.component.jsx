import React from 'react';
import './home.styles.scss'

const Home = () => (
  <div className='home'>
    <h1>Welcome to my Homepage</h1>
    <div className='menu-directory'>
      <div className='menu-item'>
        <div className='layout'>
          <h1 className='title'> BANDS </h1>
          <span className='caption'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='layout'>
          <h1 className='title'> SMARTWATCHES </h1>
          <span className='caption'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='layout'>
          <h1 className='title'> EQUIPMENT </h1>
          <span className='caption'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='layout'>
          <h1 className='title'> ACCESSORIES </h1>
          <span className='caption'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='layout'>
          <h1 className='title'> APPAREL </h1>
          <span className='caption'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default Home;