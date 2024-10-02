import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../css/contact.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [messageSent, setMessageSent] = useState(false); // State to track if message was sent
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mpwavgod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessageSent(true); // Update state to indicate success
        alert('Message sent successfully!'); // Show success message
        setFormData({ firstName: '', lastName: '', email: '', message: '' }); // Reset form
        navigate('/'); // Navigate to the home page after successful submission
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending the message.');
    }
  };

  return (
    <div>
      <main>
        <section className="contact-section">
          <div className="contact-info">
            <h1 className="text-2xl font-bold">Contact Details</h1>
            <p>
              <span className="icon" style={{ fontSize: '24px' }}>📞</span>
              <span className='span-text'>Phone: 923-456-7890</span>
            </p>
            <p>
              <span className="icon" style={{ fontSize: '24px' }}>📧</span>
              <span className='span-text'>Email: edwinfeliz@gmail.com</span>
            </p>
            <p>
              <span className="icon" style={{ marginLeft: '5px', fontSize: '24px' }}><i className="fas fa-map-marker-alt"></i></span>
              <span className='span-text'>804 E 138St, Bronx, NY, 10474</span>
            </p>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
              <button type="submit">Send message</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
