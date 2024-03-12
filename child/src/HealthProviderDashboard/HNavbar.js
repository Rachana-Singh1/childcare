//Navbar.js//
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HNavbar.css';

const HNavbar = () => {
 return (
    <nav className="hnavbar">
      <div className="hnavbar-container">
        <ul className="hnav-menu">
          <li className="hnav-item">
            <Link to="/log" className="nav-links">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HNavbar;
