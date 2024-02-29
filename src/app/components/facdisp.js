// Import necessary libraries and modules
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FacultyList = () => {
  // State to store the list of faculties
  const [faculties, setFaculties] = useState([]);

  // Function to fetch faculties data from the server
  const fetchFaculties = async () => {
    try {
      const response = await axios.get('/api/facultyRoutes'); // Replace with your API endpoint

      // console.log(response.data);
      setFaculties(response.data);
    } catch (error) {
      console.error('Error fetching faculties:', error);
    }
  };

  // Fetch faculties data on component mount
  useEffect(() => {
    fetchFaculties();
  }, []);

  return (

    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
  <h1 style={{ textAlign: 'center', fontSize: '24px', color: '#333' }}>Faculty List</h1>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
    {faculties.map((faculty) => (
      <div key={faculty._id} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', marginBottom: '20px', width: '400px', background: '#f9f9f9' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#4285f4' }}>{faculty.Name}</h2>
        <div style={{ fontSize: '14px', color: '#777', marginBottom: '8px' }}>
          <strong>Email:</strong>{'      '} {faculty.email}
        </div>
        <div style={{ fontSize: '14px', color: '#777', marginBottom: '8px' }}>
          <strong>Highest Degree:</strong> {faculty.Highest_degree}
        </div>
        <div style={{ fontSize: '14px', color: '#777', marginBottom: '8px' }}>
          <strong>University:</strong> {faculty.University}
        </div>
        <div style={{ fontSize: '14px', color: '#777', marginBottom: '8px' }}>
          <strong>Designation:</strong> {faculty.Designation}
        </div>
        <div style={{ fontSize: '14px', color: '#777', marginBottom: '8px' }}>
          <strong>Date of Joining:</strong> {faculty.Date_of_Joining_the_Institution}
        </div>
        <div style={{ fontSize: '14px', color: '#777', marginBottom: '8px' }}>
          <strong>Date of Leaving:</strong> {faculty.Date_of_Leaving}
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default FacultyList;
