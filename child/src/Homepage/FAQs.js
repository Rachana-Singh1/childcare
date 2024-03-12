import React from 'react';
import './FAQs.css';

const FAQs = () => {
  return (
    <div className="faqs-container">
      <h1>FAQs</h1>
      <div className="faq-item">
        <h2>What is a vaccine?</h2>
        <p>
          A vaccine is a product that stimulates a person's immune system to produce immunity to a specific disease, protecting the person from that disease.
        </p>
      </div>
      <div className="faq-item">
        <h2>How do vaccines work?</h2>
        <p>
          Vaccines work by introducing a small, safe amount of a virus or bacteria to the body, which triggers the immune system to produce antibodies to fight off the infection. These antibodies remain in the body and provide immunity to the disease.
        </p>
      </div>
      <div className="faq-item">
        <h2>Are vaccines safe?</h2>
        <p>
          Yes, vaccines are very safe. They are tested extensively before being approved for use, and are continually monitored for safety and effectiveness.
        </p>
      </div>
      <div className="faq-item">
        <h2>Do vaccines cause side effects?</h2>
        <p>
          Most vaccines can cause mild side effects, such as soreness at the injection site or a low-grade fever, but these are usually minor and go away on their own within a few days.
        </p>
      </div>
      <div className="faq-item">
        <h2>Why do we need vaccines?</h2>
        <p>
          Vaccines are important for protecting against serious and potentially life-threatening diseases. They help to prevent the spread of infectious diseases and protect vulnerable populations, such as infants and the elderly.
        </p>
      </div>
      <div className="faq-item">
        <h2>Can vaccines cause autism?</h2>
        <p>
          No, vaccines do not cause autism. This myth has been debunked by numerous scientific studies.
        </p>
      </div>
    </div>
  );
};

export default FAQs;