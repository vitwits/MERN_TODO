import React, { useState } from 'react';
import './AuthPage.scss';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

const AuthPage = () => {
  const [form, setForm] = useState( {
    email: 'email',
    password: 'password'
  } )
  
  const changeHandler = (event) => {
    setForm( { ...form, [event.target.name]: event.target.value } )
  }
  
  const registerHandler = async () => {
    try {
      await axios.post( '/api/auth/registration', { ...form }, {
        headers: {
          'Content-Type': 'application/json'
        }
      } )
        .then(response => console.log(response));
    } catch (err) {
      console.log( err.message )
    }
  }
  
  return (
    <BrowserRouter>
      <Switch>
        <React.Fragment>
          <div className="container">
            <div className="auth-page">
              
              <Route path="/login">
                <h3>Authentication</h3>
                <form className="form form-login" onSubmit={e => e.preventDefault()}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="email"
                        name="email"
                        className="validate"
                        onChange={changeHandler}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="password"
                        type="password"
                        className="validate"
                        onChange={changeHandler}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Log in
                    </button>
                    <Link to="/registration" className="btn-outline btn-reg">Create Account</Link>
                  </div>
                </form>
              </Route>
              
              <Route path="/registration">
                <h3>Registration</h3>
                <form className="form form-login" onSubmit={e => e.preventDefault()}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="email"
                        name="email"
                        className="validate"
                        onChange={changeHandler}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="password"
                        type="password"
                        className="validate"
                        onChange={changeHandler}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="btn waves-effect waves-light" onClick={registerHandler}>Registration
                    </button>
                    <Link to="/login" className="btn-outline btn-reg">Log in</Link>
                  </div>
                </form>
              </Route>
            
            </div>
          </div>
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default AuthPage;