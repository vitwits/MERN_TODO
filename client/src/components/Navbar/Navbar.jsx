import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

import './Navbar.scss';

const Navbar = () => {
  const { logout, isLogin } = useContext( AuthContext );
  
  return (
    <nav>
      <div className="nav-wrapper navbar teal">
        <a href="#" className="brand-logo center">MERN TODO APP</a>
        {
          isLogin
            ? <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className="nav-el"><a href="/" onClick={logout}>Logout</a></li>
            </ul>
            : <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className="nav-el"><a href="/">Login</a></li>
            </ul>
        }
      </div>
    </nav>
  
  );
};

export default Navbar;