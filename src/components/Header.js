import React, { useEffect, useState } from 'react';
import '../styles/header.css'; // Import your CSS file for styling

const texts = [
    "We are dedicated to crafting cutting-edge solutions in AI, transforming business operations through intuitive web applications, creating immersive experiences in game development, and engineering seamless mobile applications.",
    "Our mission is to leverage the latest technologies to drive innovation and deliver top-notch software products that exceed our clients' expectations.",
    "Join us on a journey to revolutionize the digital landscape with our expertise in AI, web development, game development, and mobile applications.",
    "With a commitment to excellence and a focus on client success, we provide tailored software solutions that address unique business needs, ensuring efficient processes and impactful results across various platforms."
];

function Header() {
    const [loading, setLoading] = useState(true); // State to control loader
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const animationDuration = 4000; // Duration of slide animation (4 seconds)

    useEffect(() => {
        // Simulate a loading delay
        setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust as needed

        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, animationDuration);

        return () => clearInterval(interval);
    }, []);

    return (
        <header>
            {loading && (
                <div id="loader-container" className="loader-container">
                    <svg viewBox="0 0 240 240" height="240" width="240" className="loader">
                        <circle strokeLinecap="round" strokeDashoffset="-330" strokeDasharray="0 660" strokeWidth="20" stroke="#000" fill="none" r="105" cy="120" cx="120" className="loader-ring loader-ring-a"></circle>
                        <circle strokeLinecap="round" strokeDashoffset="-110" strokeDasharray="0 220" strokeWidth="20" stroke="#000" fill="none" r="35" cy="120" cx="120" className="loader-ring loader-ring-b"></circle>
                        <circle strokeLinecap="round" strokeDasharray="0 440" strokeWidth="20" stroke="#000" fill="none" r="70" cy="120" cx="85" className="loader-ring loader-ring-c"></circle>
                        <circle strokeLinecap="round" strokeDasharray="0 440" strokeWidth="20" stroke="#000" fill="none" r="70" cy="120" cx="155" className="loader-ring loader-ring-d"></circle>
                    </svg>
                </div>
            )}
            {!loading && (
                <>
                    <div className="video-container">
                        <video src={process.env.PUBLIC_URL + "/cover.mp4"} loop autoPlay muted className="video-bg" playsInline></video>
                    </div>
                    <div className="text-overlay">
                        <h1 className="animated-text">
                            {texts[currentTextIndex]}
                        </h1>
                    </div>
                </>
            )}
        </header>
    );
}

export default Header;
