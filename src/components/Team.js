import React, { useState } from 'react';
import '../styles/Team.css';
import profileImg from '../img/mobileDev.jpg'; // Replace this path with the correct image path
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const teamData = [
  {
    name: "Jeffrey Brown",
    role: "creative leader",
    img: profileImg,
    description: "Glavida for habitant morbi tristique senectus et netus et malesuada fames.",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Ann Richmond",
    role: "creative leader",
    img: profileImg,
    description: "Glavida for habitant morbi tristique senectus et netus et malesuada fames.",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Alex Greenfield",
    role: "programming guru",
    img: profileImg,
    description: "Glavida for habitant morbi tristique senectus et netus et malesuada fames.",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Ann 2",
    role: "creative leader",
    img: profileImg,
    description: "Glavida for habitant morbi tristique senectus et netus et malesuada fames.",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Ann 3",
    role: "creative leader",
    img: profileImg,
    description: "Glavida for habitant morbi tristique senectus et netus et malesuada fames.",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    name: "Ann 4",
    role: "creative leader",
    img: profileImg,
    description: "Glavida for habitant morbi tristique senectus et netus et malesuada fames.",
    socialLinks: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com",
    },
  },
];

function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamData.length - 3 : prevIndex - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === teamData.length - 3 ? 0 : prevIndex + 3));
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
                <img src={member.img} alt={member.name} />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
              <div className="social-icons">
                <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
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
