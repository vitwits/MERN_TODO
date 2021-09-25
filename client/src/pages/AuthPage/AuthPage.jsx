import React from 'react';
import './AuthPage.scss';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <BrowserRouter>
      <Switch>
        <React.Fragment>
          <div className="container">
            <div className="auth-page">
              
              <Route path="/login">
                <h3>Authentication</h3>
                <form className="form form-login">
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="email"
                        id="email"
                        className="validate"
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
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
                <form className="form form-login">
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="email"
                        id="email"
                        className="validate"
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Registration
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