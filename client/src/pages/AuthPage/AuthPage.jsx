import React from 'react';
import './AuthPage.scss';

const AuthPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="auth-page">
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
              <a href="/" className="btn-outline btn-reg">Create Account</a>
            </div>
          </form>
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
              <a href="/" className="btn-outline btn-reg">Log in</a>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthPage;