import React, { useState } from 'react';
import '../styles/services.css';

// Import images
import mobileDev from '../img/mobileDev.jpg';
import gameDev from '../img/gameDev.jpg';
import webDev from '../img/webDev.jpg';
import aisolution from '../img/mlDev.jpg';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "AI Solution",
      image: aisolution,
      description: "Unlock the full potential of your business with our cutting-edge AI Solutions. From machine learning models to natural language processing, we provide advanced AI services. Transform your data into actionable insights and stay ahead in the competitive landscape."
    },
    {
      title: "Game Development",
      image: gameDev,
      description: "Immerse your players in captivating gaming experiences with our exceptional Game Development services. From concept to launch, we specialize in creating visually stunning and engaging games. Leveraging the latest technologies, our games offer compelling narratives."
    },
    {
      title: "Mobile Development",
      image: mobileDev,
      description: "Revolutionize your business with our premier Mobile Development services. We create high-performing, feature-packed mobile applications tailored to your needs. Whether it's iOS, Android, or cross-platform development, our expert team ensures seamless user."
    },
    {
      title: "Web Development",
      image: webDev,
      description: "Elevate your online presence with our professional Web Development services. We build responsive, user-friendly, and SEO-optimized websites tailored to your business objectives. Our expert developers ensure your website performs flawlessly and provides an exceptional user."
    }
  ];

  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <div className="services-container">
      <div className="services-cards">
        {services.map((service, index) => (
          <div key={index} className="services-card">
            <div className="card-image">
              <img src={service.image} alt={service.title} loading="lazy" />
            </div>
            <div className="card-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="learn-more-button">Learn more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mobile-services">
        <button className="nav-button prev" onClick={prevService}>&lt;</button>
        <div className="services-card">
          <div className="card-image">
            <img src={services[currentIndex].image} alt={services[currentIndex].title} loading="lazy" />
          </div>
          <div className="card-content">
            <h2>{services[currentIndex].title}</h2>
            <p>{services[currentIndex].description}</p>
            <button className="learn-more-button">Learn more</button>
          </div>
        </div>
        <button className="nav-button next" onClick={nextService}>&gt;</button>
      </div>
    </div>
  );
};

export default Services;