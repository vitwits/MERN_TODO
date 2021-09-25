import React from 'react';
import './Navbar.scss';


const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper navbar teal">
        <a href="#" className="brand-logo center">MERN TODO APP</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="nav-el"><a href="/">Login</a></li>
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;