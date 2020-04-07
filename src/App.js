import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch, Route , BrowserRouter } from 'react-router-dom'
import Register from './components/Register/Register';
import Login from './components/Login/Login';



function App() {
  return (

      <BrowserRouter>
    <Switch>
      <Route component={Login} exact path="/" />
      <Route component={Register} exact path="/register" />
      </Switch>
      </BrowserRouter>


);
}

export default App;
