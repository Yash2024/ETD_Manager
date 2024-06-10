// pages/components/AddFaculty.js
import React, { useState } from 'react';
import axios from 'axios';

const AddFaculty = () => {
  // Color scheme
  const primaryColor = '#3498db';
  const accentColor = '#e74c3c';
  const backgroundColor = '#ecf0f1';
  const textColor = '#333333';

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to add new faculty
      const facobj = {
        name: formData.name,
        email: formData.email,
        role: formData.role
      };
      await axios.post('/api/userRoute', facobj);
      alert('Faculty added successfully');
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        role: '',
      });
    } catch (error) {
      console.error('Error adding faculty:', error);
      alert('Error adding faculty');
    }
  };

  return (
    <div style={{ background: backgroundColor, padding: '20px', borderRadius: '8px', width: '300px', margin: 'auto' }}>
      <h1 style={{ color: primaryColor, textAlign: 'center' }}>Add Faculty</h1>
      <form onSubmit={handleFormSubmit} style={{ marginTop: '20px' }}>
        <label style={{ color: textColor, display: 'block', marginBottom: '8px' }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '16px' }}
          />
        </label>
        <label style={{ color: textColor, display: 'block', marginBottom: '8px' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '16px' }}
          />
        </label>
        <label style={{ color: textColor, display: 'block', marginBottom: '8px' }}>
          Role:
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '16px' }}
          />
        </label>
        <button type="submit" style={{ background: accentColor, color: backgroundColor, width: '100%', padding: '12px', boxSizing: 'border-box', cursor: 'pointer' }}>
          Add Faculty
        </button>
      </form>
    </div>
  );
};

export default AddFaculty;
