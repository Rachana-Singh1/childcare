//Navbar.js//
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
 return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" className="logo" />
          Child Care
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/home" className="nav-links">
              Home
            </Link>
          </li>
            <li className="nav-item">
            <Link to="/about" className="nav-links">
              AboutUs
            </Link>
          </li>
         <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/home" className="nav-links">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
