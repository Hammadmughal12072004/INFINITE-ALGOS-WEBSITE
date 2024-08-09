import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/contact.css'; // Import your CSS file for styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Send confirmation email to customer
      emailjs.send(
        'service_h2m0e6c', // Replace with your EmailJS service ID
        'template_v76bne7', // Replace with your EmailJS template ID
        {
          to_email: formData.email, // Customer's email as a parameter
          message: "We have received your email and will reply to you shortly.", // Custom message to the customer
        },
        'YdmS_UqYv-V3x9yfK' // Replace with your EmailJS user ID
      ).then((response) => {
        console.log('SUCCESS to customer!', response.status, response.text);
        toast.success("Your message has been sent. We will reply to you shortly.");
      }).catch((err) => {
        console.error('FAILED to customer...', err);
        toast.error("Failed to send the message. Please try again.");
      });
  
      // Send notification email to yourself
      emailjs.send(
        'service_h2m0e6c', // Replace with your EmailJS service ID
        'template_xo0ja7f', // Replace with your EmailJS template ID for your email
        {
          to_email: 'junaidnasir8282@gmail.com', // Your email
          from_name: formData.name, // Customer's name
          subject: formData.subject, // Subject of the email
          message: formData.message, // Customer's message
          from_email: formData.email, // Customer's email
        },
        'YdmS_UqYv-V3x9yfK' // Replace with your EmailJS user ID
      ).then((response) => {
        console.log('SUCCESS to yourself!', response.status, response.text);
      }).catch((err) => {
        console.error('FAILED to yourself...', err);
        toast.error("Failed to send the message to yourself. Please try again.");
      });
  
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setErrors(validationErrors);
    }
  };
  

  return (
    <div className="full-screen-container">
      <div className="contact-container">
        <h2 className="main-title text-center">CONTACT US</h2>
        <h3 className="sub-heading text-center">Feel Free To Contact Us for any query</h3>
        <form onSubmit={handleSubmit} className="contact-inner">
          <div className="input-container">
            <label className="input-label">Name</label>
            <input
              name="name"
              placeholder="Enter your name"
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="input-container">
            <label className="input-label">Email</label>
            <input
              name="email"
              placeholder="Enter your email"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="input-container">
            <label className="input-label">Subject</label>
            <input
              name="subject"
              placeholder="Enter subject"
              className="contact-input"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="error">{errors.subject}</p>}
          </div>

          <div className="input-container">
            <label className="input-label">Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="contact-textarea"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <div className="text-center">
            <button className="form-btn" type="submit">Send Message</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
