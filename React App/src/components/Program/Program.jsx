import React from 'react';
import './program.css';

const Program = () => {
  return (
    <div className="program">
      <h1>Program</h1>
      <p>
        Our program is designed to connect universities with NGOs to foster collaboration and drive positive change in the community. Through our initiatives, we aim to promote sustainable development, provide valuable resources, and create a network of support for various social causes. Join us in making a difference!
      </p>
      <div className="gallery">
        <div className="gallery-item">
          <img src="https://via.placeholder.com/300" alt="Program 1" />
          <div className="caption">University Collaboration</div>
        </div>
        <div className="gallery-item">
          <img src="https://via.placeholder.com/300" alt="Program 2" />
          <div className="caption">Community Outreach</div>
        </div>
        <div className="gallery-item">
          <img src="https://via.placeholder.com/300" alt="Program 3" />
          <div className="caption">Sustainable Projects</div>
        </div>
        <div className="gallery-item">
          <img src="https://via.placeholder.com/300" alt="Program 4" />
          <div className="caption">Educational Workshops</div>
        </div>
        <div className="gallery-item">
          <img src="https://via.placeholder.com/300" alt="Program 5" />
          <div className="caption">Research and Development</div>
        </div>
        <div className="gallery-item">
          <img src="https://via.placeholder.com/300" alt="Program 6" />
          <div className="caption">Volunteer Programs</div>
        </div>
      </div>
    </div>
  );
};

export default Program;