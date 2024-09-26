import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import "../css/LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      console.log('Attempting to login...');
      const response = await fetch(`http://localhost:8080/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token, userData } = await response.json();
        localStorage.setItem('sessionToken', token); // Store token in local storage

        const { firstName, lastName } = userData;
        const fullName = firstName && lastName ? `${firstName} ${lastName}` : 'Guest';
        setUser({ fullName, ...userData }); // Update user context

        console.log('Login successful, navigating to home page');
        navigate('/');
      } else {
        const errorData = await response.text();
        setError(errorData || 'Login failed');
        console.error('Login failed:', errorData);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div id="login-form">
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Enter Email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Submit" />
      </form>
      <a href="/profile" style={{ float: "right" }}>Register new user</a>
    </div>
  );
};

export default LoginForm;