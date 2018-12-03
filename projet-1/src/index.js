import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import Form from './components/Form';
import User from './components/User';

render((
  <BrowserRouter>
    <div>
          <Route exact path="/" component={App}></Route>
          <Route exact path="/form" component={Form}></Route>
          <Route exact path="/user/:id" component={User}></Route>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
