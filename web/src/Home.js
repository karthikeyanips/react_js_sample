import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
        <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
      Welcome to the Home Page!
    </div>
  );
}

export default Home;
