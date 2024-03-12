import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './HealthProviderLogin.css';

const HealthProviderLogin = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('hprovider');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPrompt, setShowPrompt] = useState(false); // State for showing prompt
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Email validation
      if (!validateEmail(email)) {
        setError('Please enter a valid email address.');
        return;
      }
  
      // Password validation
      if (!validatePassword(password)) {
        setError('Password must be at least 4 characters long.');
        return;
      }
  
      await firebase.auth().signInWithEmailAndPassword(email, password);
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          // User is signed in
          console.log("User signed in:", user.uid);
  
          // Retrieve additional user data including role from Firestore
          const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
          const userData = userDoc.data();
          
          if (userData.role === "hprovider") {
            navigate('/health-provider-dashboard'); // Redirect to the appointment page if user is a parent
          } else {
            setError('You are not authorized to access this page.');
            // If the user is not authorized, sign them out
            await firebase.auth().signOut();
          }
        } else {
          // No user is signed in
          console.log("No user signed in");
        }
      });
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
    <section className="health-login-section">
      <div className="health-login-container">
        <h2>HealthProvider Login</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} />
              Email:
            </label>
            <input
              type="email"
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock} />
              Password:
            </label>
            <input
              type="password"
              placeholder='must be 6 characters'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div>
          <p>Don't have an account? <Link to="/provider-register">Register here</Link></p>
        </div>
      </div>
      {showPrompt && (
        <div className="prompt-box">
          <p>Successfully logged in!</p>
        </div>
      )}
    </section>
  );
};

export default HealthProviderLogin;
