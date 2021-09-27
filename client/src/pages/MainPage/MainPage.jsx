import React from 'react'

import './MainPage.scss'

const MainPage = () => {
  return (
    <div className="container">
      <div className="main-page">
        <h4>Add a task:</h4>
        <form className="form form-login">
          <div className="row">
            <div className="input-field con s12">
              <input
                type="text"
                id="text"
                name="input"
                className="validate"
              />
              <label htmlFor="input">Task:</label>
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn">
            Add
            </button>
          </div>
        </form>
        <h3>Active Tasks:</h3>
        <div className="todos">
          <div className="row flex todos-item">
            <div className="col todos-num">1</div>
            <div className="col todos-text">Text</div>
            <div className="todos-buttons col">
              <i className="material-icons teal-text">check</i>
              <i className="material-icons orange-text">warning</i>
              <i className="material-icons red-text">delete</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;