import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    if(username.value ==="")
    {
      setError("UserName is Required.");
    }
    else if(password.value ==="")
    {
      setError("Password is Required.");
    }
    else
    {
      setError(null);
      setLoading(true);
      axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push('/dashboard');
      }).catch(error => {
        setLoading(false);
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
    }
 
  }

  return (
    <div className="maincontainer">
      <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            {/* <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small> */}
      </div>
      <div class="container-fluid">
            <div className="row no-gutter">
               
                <div className="col-md-6 d-none d-md-flex bg-image"></div>


                
                <div className="col-md-6 yellow_bg">
                    <div className="login d-flex align-items-center py-5">

                       
                        <div class="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-4">Login</h3>
                                    <p className="text-muted mb-4">Welcome to Our Application!</p>
                                    <form>
                                        <div className="form-group mb-3">
                                        <input type="text" {...username} autoComplete="new-password" placeholder="User Name" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4"/>

                                        </div>
                                        <div className="form-group mb-3">
                                        <input type="password" {...password} autoComplete="new-password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />

                                        </div>
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input id="customCheck1" type="checkbox" checked className="custom-control-input" />
                                            <label for="customCheck1" className="custom-control-label">Remember password</label>
                                        </div>
                                        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

                                        <input type="button" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />

                                        <div className="text-center d-flex justify-content-between mt-4"><p>Code by <a href="#" className="font-italic text-muted"> 
                                                <u>Karthikeyan</u></a></p></div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
      {/* Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br /> */}
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;