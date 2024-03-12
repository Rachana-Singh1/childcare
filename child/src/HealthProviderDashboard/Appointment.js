import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './Appointment.css';

const Appointment = ({ appointmentId }) => {
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('booking')
      .doc(appointmentId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setAppointment({ ...doc.data(), id: doc.id });
        } else {
          setAppointment(null);
        }
      });
     return () => unsubscribe();
  }, [appointmentId]);

  if (!appointment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="appointment-card">
      <table className="res-table">
        <thead>
          <tr>
            <th>Child Name</th>
            <th>Parent's Name</th>
            <th>Parent's Email</th>
            <th>Parent's Phone</th>
            <th>Child's Age</th>
            <th>Appointment Date</th>
            <th>Previous Vaccine Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{appointment.childName}</td>
            <td>{appointment.parentName}</td>
            <td>{appointment.parentEmail}</td>
            <td>{appointment.parentPhone}</td>
            <td>{appointment.childAge}</td>
            <td>{appointment.appointmentDate}</td>
            <td>{appointment.previousVaccineName || 'None'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Appointment;
