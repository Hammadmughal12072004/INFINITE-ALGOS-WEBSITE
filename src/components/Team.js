import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Team.css';  // Ensure this path is correct
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Team() {
  const [teamData, setTeamData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/team'); // Ensure this URL is correct
        setTeamData(response.data);
      } catch (error) {
        console.error('Error fetching the team data', error);
      }
    };
    fetchData();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const itemsToShow = window.innerWidth <= 768 ? 1 : 3;  // Show 1 item on mobile, 3 on larger screens
      return prevIndex === 0 ? teamData.length - itemsToShow : prevIndex - itemsToShow;
    });
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const itemsToShow = window.innerWidth <= 768 ? 1 : 3;  // Show 1 item on mobile, 3 on larger screens
      return prevIndex >= teamData.length - itemsToShow ? 0 : prevIndex + itemsToShow;
    });
  };
  
  const visibleTeamMembers = teamData.slice(currentIndex, currentIndex + 3);

  return (
    <div className="team-section" id="team">
      <h2 className="team-title">Our Team</h2>
      <p className="team-subtitle">
        Glavida for habitant morbi tristique senectus et netus et malesuada fames
      </p>
      <div className="team-carousel">
        <button className="arrow arrow-left" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="team-container">
          {visibleTeamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="member-photo">
                <img src={member.img} alt={member.name} loading="lazy" />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
              <div className="social-icons">
                {member.socialLinks && (
                  <>
                    {member.socialLinks.facebook && (
                      <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </a>
                    )}
                    {member.socialLinks.instagram && (
                      <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="arrow arrow-right" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Team;
