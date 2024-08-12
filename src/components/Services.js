import React from 'react';
import '../styles/services.css';

// Import images
import mobileDev from '../img/mobileDev.jpg';
import gameDev from '../img/gameDev.jpg';
import webDev from '../img/webDev.jpg';
import aisolution from '../img/mlDev.jpg';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Services</h1>
      <div className="services-cards">
        <div className="services-card">
          <div className="card-image">
            <img src={aisolution} alt="AI Solution" />
          </div>
          <div className="card-content">
            <h2>AI Solution</h2>
            <p>
              Unlock the full potential of your business with our cutting-edge AI Solutions.
              From machine learning models to natural language processing, we provide advanced AI services.
              Transform your data into actionable insights and stay ahead in the competitive landscape.
            </p>
            <button className="learn-more-button">Learn more</button>
          </div>
          <div className="card-dots"></div>
        </div>

        <div className="services-card">
          <div className="card-image">
            <img src={gameDev} alt="Game Development" />
          </div>
          <div className="card-content">
            <h2>Game Development</h2>
            <p>
              Immerse your players in captivating gaming experiences with our exceptional Game Development services.
              From concept to launch, we specialize in creating visually stunning and engaging games.
              Leveraging the latest technologies, our games offer compelling narratives and dynamic gameplay.
            </p>
            <button className="learn-more-button">Learn more</button>
          </div>
          <div className="card-dots"></div>
        </div>

        <div className="services-card">
          <div className="card-image">
            <img src={mobileDev} alt="Mobile Development" />
          </div>
          <div className="card-content">
            <h2>Mobile Development</h2>
            <p>
              Revolutionize your business with our premier Mobile Development services.
              We create high-performing, feature-packed mobile applications tailored to your needs.
              Whether it's iOS, Android, or cross-platform development, our expert team ensures seamless user experiences.
            </p>
            <button className="learn-more-button">Learn more</button>
          </div>
          <div className="card-dots"></div>
        </div>

        <div className="services-card">
          <div className="card-image">
            <img src={webDev} alt="Web Development" />
          </div>
          <div className="card-content">
            <h2>Web Development</h2>
            <p>
              Elevate your online presence with our professional Web Development services.
              We build responsive, user-friendly, and SEO-optimized websites tailored to your business objectives.
              Our expert developers ensure your website performs flawlessly and provides an exceptional user experience.
            </p>
            <button className="learn-more-button">Learn more</button>
          </div>
          <div className="card-dots"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
