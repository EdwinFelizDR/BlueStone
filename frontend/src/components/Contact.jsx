import React from 'react';
import '../css/contact.css'; // Import the contact.css file


function Contact() {
  return (
    <div>
      <main>
        <section className="contact-section">
          <div className="contact-info">
            <h1>Contact Details</h1>
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
            <form>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" />
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
              <button>Send message</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;