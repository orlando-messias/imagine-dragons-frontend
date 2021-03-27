// react
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Detail from './Pages/Detail';
import Home from './Pages/Home';

// pages and components
import Login from './Pages/Login';

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/detail/:id" exact component={Detail} />
    </Router>
  );
};

export default Routes;