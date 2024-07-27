import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2 className="title">About Us</h2>
        <p className="description">
          Joining the Dots (JTD) foundation is a not-for-profit organization registered under the Govt. of India in January 2015. Team JTD is a group of like-minded individuals who have come together to make a difference and contribute to the field of rural education. At JTD, we want to prevent students from discontinuing their education due to socio-economic factors.
        </p>
        <div className="mission">
          <div className="card">
            <h3 className="card-title">Our Mission</h3>
            <p className="card-description">
              Our mission is to ensure that no student discontinues their education due to socio-economic challenges. We believe that education is a powerful tool for change and are dedicated to creating opportunities for students in rural areas to continue their studies and achieve their dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
