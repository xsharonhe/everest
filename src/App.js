import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home.component'
import './App.css';

const Bands = () => (
  <div>
    <h1> Hello There! </h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/shop/bands' component={ Bands }/>
      </Switch>
    </div>
  );
}

export default App;
