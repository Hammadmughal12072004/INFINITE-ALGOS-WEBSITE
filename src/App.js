import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ContactWhatsapp from "./components/ContactWhatsapp";
import { animateScroll as scroll } from "react-scroll";
import arrowup from "./img/arrowUp.png";
import './App.css'; // Import your CSS file for styling

function App() {
    const [isBottom, setIsBottom] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.innerHeight + window.scrollY;
        const offsetHeight = document.documentElement.offsetHeight;
        setIsBottom(scrollTop >= offsetHeight);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Navbar />
            <Header />
            <Main />
            <Footer />
            <ContactWhatsapp />
            <button
                onClick={() => scroll.scrollToTop(2500)}
                className={`gotop ${isBottom ? '' : 'disabled'}`}
                disabled={!isBottom}
            >
                <i className="fas fa-level-up-alt"></i>
                <img className="gotop-img" src={arrowup} alt="Go to top" />
            </button>
        </>
    );
}

export default App;
