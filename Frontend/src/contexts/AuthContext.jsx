import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/users/profile', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setUser(response.data);
      })
      .catch(() => localStorage.removeItem('token'));
    }
  }, []);

  // In AuthContext.jsx
  const login = async (email, password) => {
    try {
      console.log("Attempting login for:", email);
      
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password
      });
  
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
        console.log("Login successful");
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error);
      if (error.response?.data?.error) {
        throw new Error(error.response.data.error);
      } else {
        throw new Error('Login failed. Please try again.');
      }
    }
  };
 
  const logout = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    try {
      console.log("Logging out with token:", token); // Log the token
      await axios.post('http://localhost:5000/api/users/logout', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      localStorage.removeItem('token');
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error.response ? error.response.data : error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;