import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faUser, faEnvelope, faPhone, faChild, faCalendar, faSyringe } from '@fortawesome/free-solid-svg-icons'; // Import the syringe icon
import './AppointmentPage.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const AppointmentPage = () => {
  const Navigate = useNavigate(); 

 
 // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // State variables for appointment details
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [previousVaccineName, setPreviousVaccineName] = useState('');
  const [bookingStatus, setBookingStatus] = useState(false); // State variable for booking status
  const [isFirstVaccine, setIsFirstVaccine] = useState(false); // State variable to track if it's the child's first vaccine

// Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Save the inquiry to Firebase Firestore
      await firebase.firestore().collection('booking').add({
        parentName,
        parentEmail,
        parentPhone,
        childName,
        childAge,
        appointmentDate,
        previousVaccineName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      // Set booking status to true upon successful booking
      setBookingStatus(true);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      // Handle error as needed
    }
  };
// Function to get tomorrow's date in yyyy-mm-dd format
  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  
useEffect(() => {
    // Set minimum date for appointmentDate input to tomorrow
    document.getElementById('appointmentDate').setAttribute('min', getTomorrowDate());
  }, []);
// Function to handle phone number input, allowing only up to 10 digits
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setParentPhone(value);
    if (e.target.value.match(/[a-zA-Z]/)) {
      // Display message if alphabets are entered
      alert('Please enter only numbers.');
    }
  };
return (
    <div className='appoint-page'>
    <div className="container">
      <h2>Child Vaccination Appointment</h2>
      {bookingStatus ? 
      (
        <div className="success-message">
          Appointment successfully booked!</div>
      ) : (
        <form onSubmit={handleFormSubmit}>
      <div>
          <label htmlFor="parentName">
            <FontAwesomeIcon icon={faUser} />
            Parent's Name:
          </label>
          <input
            type="text"
            id="parentName"
            value={parentName}
            onChange={(e) => setParentName(capitalizeFirstLetter(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="parentEmail">
            <FontAwesomeIcon icon={faEnvelope} />
            Parent's Email:
          </label>
          <input
            type="email"
            id="parentEmail"
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="parentPhone">
            <FontAwesomeIcon icon={faPhone} />
            Parent's Phone:
          </label>
          <input
            type="tel"
            id="parentPhone"
            value={parentPhone}
            onChange={handlePhoneChange}
            maxLength="10" // Restrict input to 10 digits
            required
          />
        </div>
        <div>
          <label htmlFor="childName">
            <FontAwesomeIcon icon={faChild} />
            Child's Name:
          </label>
          <input
            type="text"
            id="childName"
            value={childName}
            onChange={(e) => setChildName(capitalizeFirstLetter(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="childAge">
            <FontAwesomeIcon icon={faChild} />
            Child's Age:
          </label>
          <input
            type="text"
            id="childAge"
            value={childAge}
            onChange={(e) => setChildAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="appointmentDate">
            <FontAwesomeIcon icon={faCalendar} />
            Appointment Date:
          </label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div>
            <label htmlFor="previousVaccineName">
              <FontAwesomeIcon icon={faSyringe} /> {/* Icon for previous vaccine name */}
              {isFirstVaccine ? 'Previous Vaccine Name: None' : 'Previous Vaccine Name:'}
            </label>
            {isFirstVaccine ? null : (
              <input
                type="text"
                id="previousVaccineName"
                value={previousVaccineName}
                onChange={(e) => setPreviousVaccineName(capitalizeFirstLetter(e.target.value))}
                required={!isFirstVaccine}
              />
            )}
          </div>
          <div>
            <input
              type="checkbox"
              id="isFirstVaccine"
              checked={isFirstVaccine}
              onChange={(e) => setIsFirstVaccine(e.target.checked)}
            />
            <label htmlFor="isFirstVaccine">It's my child's first vaccine</label>
          </div>
<button type="submit">Schedule Appointment</button>
      </form>
      )}
    </div>
    </div>
    
  );
};

export default AppointmentPage;
