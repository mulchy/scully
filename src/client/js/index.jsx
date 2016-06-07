import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';


import App from './app.jsx';
import About from './about.jsx';
import MainLayout from './mainLayout.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));
