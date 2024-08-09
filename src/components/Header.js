import React, { useEffect, useState } from 'react';
import '../styles/header.css'; // Import your CSS file for styling

const texts = [
    "We are dedicated to crafting cutting-edge solutions in AI, transforming business operations through intuitive web applications, creating immersive experiences in game development, and engineering seamless mobile applications.",
    "Our mission is to leverage the latest technologies to drive innovation and deliver top-notch software products that exceed our clients' expectations.",
    "Join us on a journey to revolutionize the digital landscape with our expertise in AI, web development, game development, and mobile applications.",
    "With a commitment to excellence and a focus on client success, we provide tailored software solutions that address unique business needs, ensuring efficient processes and impactful results across various platforms."
];

function Header() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const animationDuration = 4000; // Duration of slide animation (4 seconds)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, animationDuration);

        return () => clearInterval(interval);
    }, []);

    return (
        <header>
            <div className="video-container">
                <video src={process.env.PUBLIC_URL + "/cover.mp4"} loop autoPlay muted className="video-bg"></video>
            </div>
            <div className="text-overlay">
                <h1 className="animated-text">
                    {texts[currentTextIndex]}
                </h1>
            </div>
        </header>
    );
}

export default Header;
