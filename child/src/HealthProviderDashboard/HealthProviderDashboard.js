import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Appointment from './Appointment';
import './HealthProviderDashboard.css';
import HNavbar from './HNavbar';
import LiveParentCount from './LiveParentCount';

const HealthProviderDashboard = () => {
const [appointments, setAppointments] = useState([]);
   useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('booking')
      .orderBy('timestamp', 'desc') // order by timestamp (newest first)
      .onSnapshot((querySnapshot) => {
        const appointmentsData = [];
        querySnapshot.forEach((doc) => {
          appointmentsData.push({ ...doc.data(), id: doc.id });
        });
        setAppointments(appointmentsData);
      });

    return () => unsubscribe();
  }, []);

  if (appointments.length === 0) {
    return <div>No appointments found.</div>;
  }

  return (
    <div className="health-provider-dashboard">
      <HNavbar/>
      <div className='health-cointainer'>
        <h2>Appointments</h2>
      {appointments.map((appointment) => (
        <Appointment key={appointment.id} appointmentId={appointment.id} />
      ))}
      </div>
      <LiveParentCount/>
    </div>
  );
};

export default HealthProviderDashboard;