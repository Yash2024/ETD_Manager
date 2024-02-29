import React, { useState, useEffect } from 'react';
import Axios, { formToJSON } from 'axios';

const FacultyData = () => {

  const primaryColor = '#3498db';
  const accentColor = '#e74c3c';
  const backgroundColor = '#ecf0f1';
  const textColor = '#333333';

  const [facultyData, setFacultyData] = useState({
    _id: '', 
    Name: '',
    email: '',
    Highest_degree: '',
    University: '',
    Year_of_attaining_higher_qualification: '',
    Association_with_the_Institution: '',
    Designation: '',
    Date_on_which_Designated: '',
    Date_of_Joining_the_Institution: '',
    Department: '',
    Specialization: '',
    Research_Paper_Publications: '',
    PhD_Guidance: '',
    Faculty_Receiving_PhD_during_the_Assessment_Years: '',
    Date_of_Leaving: '',
    Nature_of_Association: '',
  });

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Fetch faculty data using the faculty ID
    const fetchFacultyData = async () => {
      try {
        const dummyfacemail = '2001564@hbtu.ac.in';
        const response = await Axios.get(`/api/facultyRoutes/${dummyfacemail}`);
        console.log(response.data[0]);
        setFacultyData(response.data[0]); // Set faculty data once fetched
      } catch (error) {
        console.error('Error fetching faculty data:', error);
      }
    };

    fetchFacultyData();
  }, []);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = async () => {
    try {
      // Send a patch request to update faculty data
      console.log(facultyData);
      // }
      const res = await Axios.patch('/api/facultyRoutes', facultyData);
      console.log(res);
      setIsEditMode(false);
      alert('Faculty data updated successfully');
    } catch (error) {
      console.error('Error updating faculty data:', error);
    }

    console.log('saved');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFacultyData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="centered-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
    <div className="faculty-data-container" style={{ background: backgroundColor, padding: '20px', borderRadius: '8px', width: '600px' }}>
      {isEditMode ? (
        <div>
          <h1 style={{ color: primaryColor, textAlign: 'center' }}>Edit Faculty Data</h1>
          <label>
            Name:
            <input
              type="text"
              name="Name"
              value={facultyData.Name}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
            Highest Degree:
            <input
              type="text"
              name="Highest_degree"
              value={facultyData.Highest_degree}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
            University:
            <input
              type="text"
              name="University"
              value={facultyData.University}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
          Year of attaining higher qualification:
            <input
              type="text"
              name="Year_of_attaining_higher_qualification"
              value={facultyData.Year_of_attaining_higher_qualification}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
          Association with the Institution:
            <input
              type="text"
              name="Association_with_the_Institution"
              value={facultyData.Association_with_the_Institution}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
          Designation:
            <input
              type="text"
              name="Designation"
              value={facultyData.Designation}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
          Date on which Designated:
            <input
              type="text"
              name="Date_on_which_Designated"
              value={facultyData.Date_on_which_Designated}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
          Date of Joining the Institution:
            <input
              type="text"
              name="Date_of_Joining_the_Institution"
              value={facultyData.Date_of_Joining_the_Institution}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
          Department:
            <input
              type="text"
              name="Department"
              value={facultyData.Department}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
          Specialization:
            <input
              type="text"
              name="Specialization"
              value={facultyData.Specialization}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
          Research Paper Publications:
            <input
              type="text"
              name="Research_Paper_Publications"
              value={facultyData.Research_Paper_Publications}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
           PhD Guidance:
            <input
              type="text"
              name="PhD_Guidance"
              value={facultyData.PhD_Guidance}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
          Faculty Receiving PhD during the Assessment Years:
            <input
              type="text"
              name="Faculty_Receiving_PhD_during_the_Assessment_Years"
              value={facultyData.Faculty_Receiving_PhD_during_the_Assessment_Years}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
          Date of Leaving:
            <input
              type="text"
              name="Date_of_Leaving"
              value={facultyData.Date_of_Leaving}
              onChange={handleInputChange}
            />
          </label><br/>
          <label>
          Nature of Association:
            <input
              type="text"
              name="Nature_of_Association"
              value={facultyData.Nature_of_Association}
              onChange={handleInputChange}
            />
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
          <h1 style={{ color: primaryColor, textAlign: 'center' }}>Faculty Data</h1>
          <p>
            <strong>Name:</strong> {facultyData.Name}<br/>
            <strong>Highest Degree:</strong> {facultyData.Highest_degree}<br/>
            <strong>University:</strong> {facultyData.University}<br/>
            <strong>Year of attaining higher qualification:</strong> {facultyData.Year_of_attaining_higher_qualification}<br/>
            <strong>Association with the Institution:</strong> {facultyData.Association_with_the_Institution}<br/>
            <strong>Designation:</strong> {facultyData.Designation}<br/>
            <strong>Date on which Designated:</strong> {facultyData.Date_on_which_Designated}<br/>
            <strong>Date of Joining the Institution:</strong> {facultyData.Date_of_Joining_the_Institution}<br/>
            <strong>Department:</strong> {facultyData.Department}<br/>
            <strong>Specialization:</strong> {facultyData.Specialization}<br/>
            <strong>Research Paper Publications:</strong> {facultyData.Research_Paper_Publications}<br/>
            <strong>PhD Guidance:</strong> {facultyData.PhD_Guidance}<br/>
            <strong>Faculty Receiving PhD during the Assessment Years:</strong> {facultyData.Faculty_Receiving_PhD_during_the_Assessment_Years}<br/>
            <strong>Date of Leaving:</strong> {facultyData.Date_of_Leaving}<br/>
            <strong>Nature of Association:</strong> {facultyData.Nature_of_Association}<br/>
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

export default FacultyData;
