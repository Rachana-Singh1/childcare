import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'; // Import the required icons
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './ParentLogin.css';

const ParentLogin = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('parent');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
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
        setError('Password must be at least 6 characters long.');
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
          
          if (userData.role === "parent") {
            setSuccess('Login successful. Redirecting...');
          
            navigate('/appointment'); // Redirect to the appointment page if user is a parent
          } 
        else {
            setError('You have yet to be signup as a parent.');
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

  // Function to validate email using regular expression
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Function to validate password length
  const validatePassword = (password) => {
    return password.length >= 4;
  };

  return (
    <section className="parent-login-section">
      <div className="parent-login-container">
        <h2>Parent Login</h2>
        
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
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
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </div>

    
    </section>
  );
};

export default ParentLogin;
