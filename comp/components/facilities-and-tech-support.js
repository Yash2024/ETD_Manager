"use client";

import React, { useState , useEffect} from 'react';
import Axios from 'axios';
import styles from '../styles/lab.module.css'

const FacilitiesAndTechSupport = () => {
  // Color scheme
  const primaryColor = '#3498db';
  const secondaryColor = '#2ecc71';
  const backgroundColor = '#ecf0f1';
  const accentColor = '#e74c3c';
  const textColor = '#333333';
  const highlightColor = '#f39c12';

  // Mock data for initial list of laboratories
  let currlab;
    let initialLabList = []  ;
  const getcurrlabs = async () =>{

    // console.log("getcduh called");
    currlab = await Axios.get('/api/labRoutes');
    initialLabList = currlab.data;
    console.log(initialLabList);
    setLabList(initialLabList);
    // console.log(initialLabList);
  }
 
  useEffect(() => {
    getcurrlabs();
  }, []); 



// console

  const [labList, setLabList] = useState(initialLabList);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    Name_of_the_Laboratory: '',
    No_of_students_per_setup: '',
    Name_of_the_important_equipment: '',
    Weekly_utilization_status: '',
    Name_of_technical_staff: '',
    Designation: '',
    Qualification: '',
    Additional_facilities: '',
    Safety_measures: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLabList((prevLabList) => [...prevLabList, formData]);

    const labobj = {
        Name_of_the_Laboratory: formData.Name_of_the_Laboratory,
        No_of_students_per_setup: formData.No_of_students_per_setup,
        Name_of_the_important_equipment: formData.Name_of_the_important_equipment,
        Weekly_utilization_status: formData.Weekly_utilization_status,
        Name_of_technical_staff: formData.Name_of_technical_staff,
        Designation: formData.Designation,
        Qualification: formData.Qualification,
        Additional_facilities: formData.Additional_facilities,
        Safety_measures: formData.Safety_measures,
    };

    await Axios.post('/api/labRoutes',labobj).then(()=>{
        alert('Lab Added');
    })
    getcurrlabs();
    setFormData({
      Name_of_the_Laboratory: '',
      No_of_students_per_setup: '',
      Name_of_the_important_equipment: '',
      Weekly_utilization_status: '',
      Name_of_technical_staff: '',
      Designation: '',
      Qualification: '',
      Additional_facilities: '',
      Safety_measures: '',
    });
    setIsFormVisible(false);

    
  };

  return (
    // <body >
    <div className={`${styles.labcontainer}`} onLoad={()=>getCurrlabs} style={{ background: backgroundColor, padding: '20px', borderRadius: '8px' }}>
      <h1 className={`${styles.labtitle}`} style={{ color: primaryColor }}>List of Laboratories</h1>
      <ul>
        {labList.map((lab, index) => (
          <li key={index} className={`${styles.labitem}`} style={{ color: textColor }}>
            <strong style={{ color: accentColor }}>{lab.Name_of_the_Laboratory}</strong><br />
            <div className={`${styles.labdetails}`}>
              <strong>No of students per setup:</strong> {lab.No_of_students_per_setup}<br />
              <strong>Name of the important equipment:</strong> {lab.Name_of_the_important_equipment}<br />
              <strong>Weekly utilization status:</strong> {lab.Weekly_utilization_status}<br />
              <strong>Name of technical staff:</strong> {lab.Name_of_technical_staff}<br />
              <strong>Designation:</strong> {lab.Designation}<br />
              <strong>Qualification:</strong> {lab.Qualification}<br />
              <strong>Additional Facilities:</strong> {lab.Additional_facilities}<br />
              <strong>Safety Measures:</strong> {lab.Safety_measures}<br /><br />
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className={`${styles.addlabbtn}`}
        style={{ background: secondaryColor, color: backgroundColor }}
      >
        Add New Laboratory
      </button>

      {isFormVisible && (
        <form onSubmit={handleFormSubmit} className={`${styles.labform}`} style={{ marginTop: '20px' }}>
          <h2 className={`${styles.formtitle}`} style={{ color: primaryColor }}>Add New Laboratory</h2>
          <label style={{ color: textColor }}>
            Name of the Laboratory:
            <input
              type="text"
              name="Name_of_the_Laboratory"
              value={formData.Name_of_the_Laboratory}
              onChange={handleInputChange}
              required
            /><br />
            Number of students per setup:
            <input
              type="text"
              name="No_of_students_per_setup"
              value={formData.No_of_students_per_setup}
              onChange={handleInputChange}
              required
            /><br />
            Name of the important equipment:
            <input
              type="text"
              name="Name_of_the_important_equipment"
              value={formData.Name_of_the_important_equipment}
              onChange={handleInputChange}
              required
            /><br />
            Weekly utilization status:
            <input
              type="text"
              name="Weekly_utilization_status"
              value={formData.Weekly_utilization_status}
              onChange={handleInputChange}
              required
            /><br />
            Name of technical staff:
            <input
              type="text"
              name="Name_of_technical_staff"
              value={formData.Name_of_technical_staff}
              onChange={handleInputChange}
              required
            /><br />
            Designation:
            <input
              type="text"
              name="Designation"
              value={formData.Designation}
              onChange={handleInputChange}
              required
            /><br />
            Qualification:
            <input
              type="text"
              name="Qualification"
              value={formData.Qualification}
              onChange={handleInputChange}
              required
            /><br />
            Additional Facilities:
            <input
              type="text"
              name="Additional_facilities"
              value={formData.Additional_facilities}
              onChange={handleInputChange}
              required
            /><br />
            Safety Measures:
            <input
              type="text"
              name="Safety_measures"
              value={formData.Safety_measures}
              onChange={handleInputChange}
              required
            /><br />
            <button type="submit" className={`${styles.submitbtn}`} style={{ background: accentColor, color: backgroundColor }}>
              Submit
            </button>
          </label>
        </form>
      )}
    </div>
    
    //  </body>
  );
};

export default FacilitiesAndTechSupport;
