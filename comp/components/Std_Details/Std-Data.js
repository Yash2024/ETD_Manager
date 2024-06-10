import React, { useState, useEffect } from 'react';
import Axios, { formToJSON } from 'axios';
import { signIn, useSession, signOut } from "next-auth/react";

const StudentData = () => {

  const { status, data: session } = useSession();

  const primaryColor = '#3498db';
  const accentColor = '#e74c3c';
  const backgroundColor = '#ecf0f1';
  const textColor = '#333333';

  const [studentData, setStudentData] = useState({
    _id: '', 
    name: '',
    email: '',
    Year: '',
    Department: '',
    Mob: '',
    Address: '',
    Guardian: '',
  });

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const dummyfacemail = session?.user?.email;
        studentData.name=session?.user?.name;
        studentData.email=session?.user?.email;
        console.log("instd"+dummyfacemail+studentData.name);
        // const dummyfacemail = '2001564@hbtu.ac.in';
        const response = await Axios.get(`/api/std_routes/${dummyfacemail}`);
        console.log(response.data[0]);
        setStudentData(response.data[0]); 
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, []);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = async () => {
    try {
      console.log(studentData);
      const res = await Axios.patch('/api/std_routes', studentData);
      console.log(res);
      setIsEditMode(false);
      alert('Student data updated successfully');
    } catch (error) {
      console.error('Error updating Student data:', error);
    }

    console.log('saved');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="centered-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
    <div className="student-data-container" style={{ background: backgroundColor, padding: '20px', borderRadius: '8px', width: '600px' }}>
      {isEditMode ? (
        <div>
          <h1 style={{ color: primaryColor, textAlign: 'center' }}>Edit Student Data</h1>
          <label>Name:
            <input type="text" name="name" value={studentData.name} onChange={handleInputChange}/>
          </label><br/>
          <label> Email:
            <input type="text" name="Email" value={studentData.email} onChange={handleInputChange}/>
          </label><br/>
          <label>Year:
            <input type="text" name="Year" value={studentData.Year} onChange={handleInputChange}/>
          </label><br/>
          <label>Department:
            <input type="text" name="Department" value={studentData.Department} onChange={handleInputChange}/>
          </label><br/>
          <label>Contact No.:
            <input type="text" name="Mob" value={studentData.Mob} onChange={handleInputChange}/>
          </label><br/>
          <label>Address:
            <input type="text" name="Address" value={studentData.Address} onChange={handleInputChange}/>
          </label><br/>
          <label>Guardian:
            <input type="text" name="Guardian" value={studentData.Guardian} onChange={handleInputChange}/>
          </label><br/>
          
          <button
            style={{
              background: accentColor,
              color: backgroundColor,
              padding: '12px',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
              border: 'none',
              marginTop: '20px',
            }}
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <h1 style={{ color: primaryColor, textAlign: 'center' }}>Student Data</h1>
          <p>
            <strong>Name:</strong> {studentData.name}<br/>
            <strong>Email:</strong> {studentData.email}<br/>
            <strong>Year:</strong> {studentData.Year}<br/>
            <strong>Department:</strong> {studentData.Department}<br/>
            <strong>Contact No.:</strong> {studentData.Mob}<br/>
            <strong>Address:</strong> {studentData.Address}<br/>
            <strong>Guardian:</strong> {studentData.Guardian}<br/>
          </p>
          <button
            style={{
              background: primaryColor,
              color: backgroundColor,
              padding: '12px',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
              border: 'none',
              marginTop: '20px',
            }}
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  </div>

  );
};

export default StudentData;
