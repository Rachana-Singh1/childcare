import React from 'react';
import { Link } from 'react-router-dom';
import doc from "../images/doctor.jpg";
import par from "../images/parent.jpg";
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <h2></h2>
      <div className="login-container">
        <div className="login-item">
          <h3>As Parent</h3>
          <Link to="/parent-login">
            <img src={par} alt="Parent" />
          </Link>
        </div>
        <div className="login-item">
          <h3>As HealthProvider</h3>
          <Link to="/health-provider-login">
            <img src={doc} alt="Health Provider" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
