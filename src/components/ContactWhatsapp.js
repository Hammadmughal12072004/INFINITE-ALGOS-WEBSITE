import React from 'react';
import "../styles/whatsapp.css";

const FloatingWhatsAppButton = () => {
    const handleButtonClick = () => {
        const phoneNumber = '+923116741249'; // Add your phone number here with country code
        const message = 'Hello, I would like to contact you.'; // Customize your message
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="floating-whatsapp-container" onClick={handleButtonClick}>
            <div className="floating-whatsapp-button">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="Contact WhatsApp"
                    className="whatsapp-icon"
                />
            </div>
            <div className="floating-text">How can I help you?</div>
        </div>
    );
};

export default FloatingWhatsAppButton;
