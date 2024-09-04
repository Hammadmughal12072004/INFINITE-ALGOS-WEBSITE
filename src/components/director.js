import React, { useState, useEffect } from "react";
import "../styles/director.css";
import axios from "axios";

function Director() {
  const [directors, setDirectors] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
  }, []);

  // Handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? directors.length - 3 : prevIndex - 3;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  // Handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 3 >= directors.length ? 0 : prevIndex + 3;
      return newIndex;
    });
  };

  // Render the director component
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
          {directors.slice(currentIndex, currentIndex + 3).map((director, index) => (
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
