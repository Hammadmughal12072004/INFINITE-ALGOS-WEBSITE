import React, { useState, useEffect } from "react";
import "../styles/director.css";
import axios from "axios";

function Director() {
  const [directors, setDirectors] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const fetchDirectors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/directors");
        setDirectors(response.data);
      } catch (error) {
        console.error("Error fetching directors:", error);
      }
    };

    fetchDirectors();

    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Set to true if screen is small
    };

    window.addEventListener("resize", updateScreenSize);
    updateScreenSize(); // Set initial screen size

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const offset = isSmallScreen ? 1 : 3; // Slide one on small screens, three on large
      const newIndex = prevIndex === 0 ? directors.length - offset : prevIndex - offset;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  // Handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const offset = isSmallScreen ? 1 : 3;
      const newIndex = prevIndex + offset >= directors.length ? 0 : prevIndex + offset;
      return newIndex;
    });
  };

  return (
    <div className="director-container">
      <h2 className="our-team">Board of Directors</h2>
      <div className="slider-container">
        {/* Left arrow button */}
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#8249;
        </button>

        {/* Display the director cards */}
        <div className="team-members">
          {directors.slice(currentIndex, currentIndex + (isSmallScreen ? 1 : 3)).map((director, index) => (
            <div key={index} className="member">
              <img src={director.image} alt={director.name} />
              <div className="info">
                <h3>{director.name}</h3>
                <p>{director.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow button */}
        <button className="arrow right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Director;
