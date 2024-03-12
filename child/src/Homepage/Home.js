import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';
import vinfo1 from "../images/Vinfo1.jpg";
import vinfo2 from "../images/Vinfo2.jpg";
import Front from "../images/front.jpg";
import vinfo3 from "../images/Vinfo3.jpg";
const Home = () => {
  return (
    <div className="home-page">
     <Navbar />
       <section className="hero-section">
    <h1>Welcome to Child Vaccination Hub</h1>
    <button><Link to="/parent-login" className="btn btn-primary">Book an Appointment for your child</Link></button>
    <div class="hero-content">
      <p>Protect your child today. Empowering parents with information and resources for their child's health and well-being.</p>
      <img src={Front} alt=" " />
    </div>
  </section>
<section className="overview-section">
<div className="overview-container">
          <h2>Overview</h2>
          <div className="overview-content">
            <p>Welcome to our Child Vaccination Website, where we prioritize the health and well-being of your child through </p>
              <p>comprehensive vaccination services. Our platform is designed to provide parents with easy access to essential 
              information, resources,</p><p> and tools to ensure the best possible protection for their children against preventable
               diseases.</p>
              <div className="box">
     </div>
    <div className="boxs">
      </div>
<div className="vaccination-schedule">
              <h2>Latest Vaccination Schedule for Children</h2>
             <div className="vaccine-row">
      <div className="vaccine-Box">
        <img src={vinfo1} alt="Marketing" />
        <h2>0 - 1 Yrs</h2>
    <button><Link to="/info1" className="btn btn-primary">Learn More</Link></button>
        </div>
      <div className="vaccine-Box">
        <img src={vinfo2} alt="Our Features" />
        <h2>2 - 4 Yrs</h2>
      <button><Link to="/info2" className="btn btn-primary">Learn More</Link></button>
      </div>
      <div className="vaccine-Box">
        <img src={vinfo3} alt="Research" />
        <h2>4 - 6 Yrs</h2>
         <button><Link to="/info3" className="btn btn-primary">Learn More</Link></button>
      </div>
      </div>
            </div>
            <div className="resources">
              <h2>Resources</h2>
              <div className="resources-list">
                <div className="resource-item">
                  <h3>FAQs</h3>
                  <p>Find answers to frequently asked questions about vaccines.</p>
                  <button><Link to="/faqs" className="btn btn-primary">Learn More</Link></button>
                </div>
                <div className="resource-item">
                  <h3>Videos</h3>
                  <p>Watch informative videos about vaccine safety and efficacy.</p>
                  <button><Link to="/video" className="btn btn-primary">Learn More</Link></button>
                </div>
                <div className="resource-item">
                  <h3>Articles</h3>
                  <p>Read articles on the latest developments in vaccination research.</p>
                  <button><Link to="/article" className="btn btn-primary">Read Articles</Link></button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2024 Child Vaccination Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
