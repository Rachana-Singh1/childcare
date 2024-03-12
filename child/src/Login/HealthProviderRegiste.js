import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './HealthProviderRegister.css';

const HealthProviderRegister = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('hprovider');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Validation checks...
  
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
  
      // Store additional user data including role in Firestore or Realtime Database
      await firebase.firestore().collection('users').doc(userCredential.user.uid).set({
        name: name,
        email: email,
        role: role
      });
  
      // Set success message
      setSuccessMessage('Registration successful!');
  
      navigate('/login/healthprovider');
    } catch (error) {
      setError(error.message);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 4;
  };

  return (
    <section className="provider-register-section">
      <div className="provider-register-container">
        <h1>HealthProvider Registration</h1>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>} {/* Render success message */}
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">
              <FontAwesomeIcon icon={faUser} />
              Name<span className="required">*</span>:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} />
              Email<span className="required">*</span>:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock} />
              Password<span className="required">*</span>:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/health-provider-login">Login here</Link></p>
      </div>
    </section>
  );
};

export default HealthProviderRegister;
