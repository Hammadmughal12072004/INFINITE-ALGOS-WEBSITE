import React from 'react';
import '../styles/services.css';

// Import images
import arrowUp from '../img/webDev.jpg';
import gameDev from '../img/gameDev.jpg';
import webDev from '../img/webDev.jpg';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-card">
        <div className="card-image">
          <img src={arrowUp} alt="Contact Us" />
        </div>
        <div className="card-content">
          <h2>Contact us</h2>
          <p>
            Lorem ipsum dolor sit dim amet, mea regione diamet principes at. Cum no movi
            lorem ipsum dolor sit dim
          </p>
        </div>
        <div className="card-dots"></div>
      </div>

      <div className="services-card">
        <div className="card-image">
          <img src={gameDev} alt="Describe Issue" />
        </div>
        <div className="card-content">
          <h2>Describe issue</h2>
          <p>
            Lorem ipsum dolor sit dim amet, mea regione diamet principes at. Cum no movi
            lorem ipsum dolor sit dim
          </p>
        </div>
        <div className="card-dots"></div>
      </div>

      <div className="services-card">
        <div className="card-image">
          <img src={gameDev} alt="Get Help" />
        </div>
        <div className="card-content">
          <h2>Get help</h2>
          <p>
            Lorem ipsum dolor sit dim amet, mea regione diamet principes at. Cum no movi
            lorem ipsum dolor sit dim
          </p>
        </div>
        <div className="card-dots"></div>
      </div>

      <div className="services-card">
        <div className="card-image">
          <img src={webDev} alt="Done! Issue is resolved" />
        </div>
        <div className="card-content">
          <h2>Done! Issue is resolved</h2>
          <p>
            Lorem ipsum dolor sit dim amet, mea regione diamet
          </p>
          <button className="learn-more-button">Learn more</button>
        </div>
        <div className="card-dots"></div>
      </div>
    </div>
  );
};

export default Services;
