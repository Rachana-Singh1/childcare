import React from 'react';
import './AboutUs.css'; // Assuming you have a CSS file named 'AboutUs.css'
import doctor from "../images/doctor1.jpg";
import doc from "../images/doctor2.jpg";
import doct from "../images/doctor3.jpg";
import doctor1 from "../images/doctor4.jpg";
import Navbar from '../Homepage/Navbar';
import About from "../images/about.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Navbar/>
      <div className="about-container">
        <h2>AboutUs</h2>
      <div className='about-contain'>
      <p> our mission is to protect children of all ages from vaccine-preventable diseases.</p>
        <p> We believe that every child deserves a healthy start in life, and vaccines are a crucial part of that.</p>
        <p>Our team is committed to providing accurate and up-to-date information about vaccines, </p>
        <p>so that parents and caregivers can make informed decisions about their children's health.</p>
        </div>
        </div>
        <div className='about-cont'>
        <img src={About} alt="" />
        </div>
       <div className="about-page">
      <h2>Our Pediatrician</h2>
      <p></p>
      <div className="about-row">
        <div className="about-Box">
          <img src={doct} alt="" />
          <h2>Dr. Akanksha Parikh</h2>
          <p>I'm on the right track, baby, I was born to be a pediatrician.</p>
          </div>
        <div className="about-Box">
          <img src={doc} alt="" />
          <h2>Dr.Sanjiv Agarawal</h2>
          <p>Let's get loud about the importance of pediatric care!.</p>
          </div>
        <div className="about-Box">
          <img src={doctor} alt="" />
          <h2>Dr. Ashit Hegde</h2>
          <p> No more tears, only smiles and sunshine.</p>
          </div>
        <div className="about-Box">
          <img src={doctor1} alt="" />
          <h2>Dr. Asha Kapadia </h2>
          <p>Don't stop believin' in the power of pediatric care..</p>
          </div> 
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
