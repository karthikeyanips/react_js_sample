import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';


function Dashboard(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div>
      <div className="header">
        <div class="row ">
          <div class="col-md-9 ">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>

            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
          <div class="col-md-3 text-right">
            <input class="align_right text-right" type="button" onClick={handleLogout} value="Logout" />

          </div>
        </div>
          
       
           
       </div>
          
      Welcome {user.name}!<br /><br />
      {/* <input type="button" onClick={handleLogout} value="Logout" /> */}
    </div>
  );
}

export default Dashboard;
