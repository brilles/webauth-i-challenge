import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import UserList from './users/UserList.js';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="body">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <PrivateRoute exact path="/userlist" component={UserList} /> */}
        </div>
      </div>
    </Router>
  );
}
