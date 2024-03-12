import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import './Contact.css';
import Navbar from '../Homepage/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save the inquiry to Firebase Firestore
      await firebase.firestore().collection('inquiries').add({
        name,
        email,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    }
  };

  return (
    <section className='contact-section'>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        {submitted ? (
          <div className="success-message">
            <p>Thank you for contacting us. We will get back to you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="name">
                <FontAwesomeIcon icon={faUser} />
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">
                <FontAwesomeIcon icon={faEnvelope} />
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">
                <FontAwesomeIcon icon={faComment} />
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </section>
  );
};
export default Contact;
