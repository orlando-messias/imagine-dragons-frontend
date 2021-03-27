// react
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// pages and components
import Login from './Pages/Login';

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
    </Router>
  );
};

export default Routes;