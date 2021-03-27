// react
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';

// pages and components
import Login from './Pages/Login';

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
    </Router>
  );
};

export default Routes;