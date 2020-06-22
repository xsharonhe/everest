import React from 'react';
import Directory from '../components/directory/directory.component'
import './home.styles.scss'

const Bands = () => (
  <div>
    <h1> Hello There! </h1>
  </div>
)

const Home = () => (
  <div className='home'>
    <Directory />
  </div>
);

export default Home;