import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Homepage/Home';
import Login from './Login/Login';
import './App.css';
import AppointmentPage from './Homepage/AppointmentPage';
import Vinfo1 from './Vaccines/Vinfo1';
import Vinfo2 from './Vaccines/Vinfo2';
import Vinfo3 from './Vaccines/Vinfo3';
import FAQs from './Homepage/FAQs';
import Article from './Homepage/Article';
import LiveParentCount from './HealthProviderDashboard/LiveParentCount';
import HealthProviderDashboard from './HealthProviderDashboard/HealthProviderDashboard';
import ParentLogin from './Login/ParentLogin';
import ParentRegister from'./Login/ParentRegister';
import Log from './HealthProviderDashboard/Log';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import Video from './Homepage/Video';
import HealthProviderLogin from './Login/HealthProviderLogin';
import HealthProviderRegister from './Login/HealthProviderRegiste';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyA4iN7PzLM_Gy6yoYh0-Yk0KtKOQpbgkmM",
  authDomain: "vaxo-de12f.firebaseapp.com",
  projectId: "vaxo-de12f",
  storageBucket: "vaxo-de12f.appspot.com",
  messagingSenderId: "74318026825",
  appId: "1:74318026825:web:34f8b3a58189730a1a8798",
  measurementId: "G-8RFZD21RQQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/parent-login" exact element={<ParentLogin/>} />
          <Route path="/register" exact element={<ParentRegister />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/health-provider-login" element={<HealthProviderLogin/>} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/info1" element={<Vinfo1 />} />
          <Route path="/info2" element={<Vinfo2 />} />
          <Route path="/info3" element={<Vinfo3 />} />
          <Route path="/article" element={<Article />} />
          <Route path="/health-provider-dashboard" element={<HealthProviderDashboard/>} />
          <Route path="/video" element={<Video />} />
          <Route path="/health-provider-dashboard" element={<LiveParentCount />} />
          <Route path="/provider-register" element={<HealthProviderRegister/>} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/log" element={<Log />} />
          <Route path="/contact" exact element={<Contact />} />
          {/* Link to VaccinationSchedule */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
