import React, { useState, useEffect, useCallback } from 'react';
import './Article.css';
import Navbar from './Navbar';
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import boost from '../images/boost.jpg';
import Catch from '../images/catch.jpg';
import Your from '../images/your.jpg';
import Role from '../images/role.jpg';

const Article = () => {
  // Define an array of images for the slideshow
  const images = [image1, image2, image3];
// State to track the index of the current image
  const [currentIndex, setCurrentIndex] = useState(0);
 // Define the updateIndex function using useCallback
  const updateIndex = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]); // Include images.length as a dependency
// Effect to update the index at regular intervals
  useEffect(() => {
    const interval = setInterval(updateIndex, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [updateIndex]); // Include updateIndex as a dependency

  return (
    <div className="Article">
      <Navbar />
      <h2 className="ChildCareHeader">Child Care</h2>
          <h3>Caring for child</h3>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow-image" />
      <div className="article-content">
        <p className="CareParagraph">
        Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, 
        whose ages range from two weeks of age to 18 years. Although most parents spend a significant amount of time caring 
        for their child, child care typically refers to the care provided by caregivers that are not the child's parents. 
        Child care is a broad topic that covers a wide spectrum of
         professionals, institutions, contexts, activities, and social and cultural conventions.
        </p>
      </div>
           <div className="CareTips">
        <h3>Crae Tips</h3>
        <ul className="CareTips-list">
          <li>
            <img src={boost} alt=" " className="CareTips-image" />
            <p><strong>Boost Your Child's Self-Esteem:</strong> Kids start developing their sense of self as babies when they see
             themselves through their parents' eyes. 
           </p>
          </li>
          <li>
            <img src={Catch} alt="" className="CareTips-image" />
            <p><strong>Catch Kids Being Good:</strong> "I was watching you play with your sister and you were very patient." 
            These statements will do more to encourage good behavior over the long run than repeated scoldings.</p>
          </li>
          <li>
            <img src={Your} alt="" className="CareTips-image" />
            <p><strong>Make Time for Your Kids:</strong> It's often hard for parents and kids to get together for a 
            family meal, let alone spend quality time together. But there is probably nothing kids would like more.</p>
          </li>
          <li>
            <img src={Role} alt="" className="CareTips-image" />
            <p><strong>Be a Good Role Model:</strong>Young kids learn a lot about how to act by watching their parents.
             The younger they are, the more cues they take from you.</p>
          </li>
        </ul>
      </div>
       <div className='PersonArticles'>
      <div className='article-container'>
      <p>
      <h1>Universal Immunization Program (UIP)</h1>
      The Universal Immunization Program (UIP) is the flagship program of the Government of India for providing free
       vaccination to all children in the country. The program was launched in 1985 and has since expanded to cover a range 
       of vaccines against various diseases.The UIP currently provides vaccines against 12 vaccine-preventable diseases, 
       including tuberculosis, diphtheria, pertussis, tetanus, polio, measles, mumps, rubella, hepatitis B, 
       Japanese encephalitis, rotavirus, and pneumococcal pneumonia.The UIP targets children under the age of 1 year and
        pregnant women. The program is implemented through a network of over 27,000 immunization sessions conducted every
         week across the country. The program also includes a range of outreach activities, such as home visits, community 
         meetings, and immunization camps, to improve access to vaccination services in remote and hard-to-reach areas.
      </p>
       </div>
    <div className='article-container'>
      <p>
      <h1>Mission Indradhanush</h1>
      Mission Indradhanush is a national initiative launched in 2014 to accelerate the coverage of full immunization among
       children and pregnant women in India. The initiative targets 201 high-focus districts with low immunization
        coverage and high infant and maternal mortality rates. The initiative uses a targeted approach to reach children
         and pregnant women who have been missed by the routine immunization program.Mission Indradhanush uses a range of
          strategies to improve immunization coverage, including intensified immunization sessions, outreach activities, 
          community mobilization, and social mobilization. The initiative has been successful in improving immunization 
          coverage in the targeted districts, with the coverage increasing from 61% in 2014 to 82% in 2019.
      </p>
    </div>
    </div>
    </div>
    );
  };
  
  export default Article;
     
      
    