import React, { useState } from 'react';
import '../css/profile.css'; // Import the profile.css file
import { useNavigate } from 'react-router-dom';


function Profile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: ''
  });

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

    // Helper function to hash password
    const hashPassword = async (password) => {
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hash = await crypto.subtle.digest('SHA-256', data);
      return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    };

    const checkUserExists = async (email) => {
      const response = await fetch(`http://localhost:8080/checkuser?email=${encodeURIComponent(email)}`);
      if (!response.ok) {
        throw new Error('Failed to check user existence');
      }
      return response.json();
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      try {
        // Check if user already exists
        const userExists = await checkUserExists(formData.email);
        if (userExists) {
          setError('A user with this email already exists');
          return;
        }
  
        const hashedPassword = await hashPassword(formData.password);
  
        const dataToSend = {
          ...formData,
          passwordHash: hashedPassword,
          password: undefined // Remove the plain text password
        };
  
        console.log('Data being sent to server:', dataToSend);
  
        const response = await fetch('http://localhost:8080/createuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP error! status: ${response.status}, message: ${JSON.stringify(errorData)}`);
        }
  
        const savedUser = await response.json();
        console.log('User registered successfully:', savedUser);
        
        // Redirect to login page
        navigate('/login');
  
      } catch (error) {
        console.error('There was an error registering the user!', error);
        setError('An error occurred while registering. Please try again.');
      }
    };

  return (
    <div className="container-profile">
      <h1>Register</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

        <label htmlFor="address1">Address 1:</label>
        <input type="text" id="address1" name="address1" value={formData.address1} onChange={handleChange} />

        <label htmlFor="address2">Address 2:</label>
        <input type="text" id="address2" name="address2" value={formData.address2} onChange={handleChange} />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />

        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} maxLength="2" />

        <label htmlFor="postalCode">Postal Code:</label>
        <input type="number" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Profile;