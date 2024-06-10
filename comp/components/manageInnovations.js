import React, { useState } from 'react';

const TeachingInnovations = () => {
  const [innovation, setInnovation] = useState({
    Title: '',
    Faculty: '',
    Description: '',
    Criteria: '',
    Image: null,
    Document: null,
  });

  const [innovationsList, setInnovationsList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    console.log(innovation);
      if (type === 'file') {
      setInnovation((prevInnovation) => ({
        ...prevInnovation,
        [name]: files[0], // Assuming only one file is selected
      }));
    } else {
      setInnovation((prevInnovation) => ({ ...prevInnovation, [name]: value }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInnovationsList((prevList) => [...prevList, innovation]);
    setInnovation({ Title: '', Faculty: '', Description: '', Criteria: '', Image: null, Document: null });
  };

  return (
    <div className="innovations-container" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '20px', borderRadius: '8px', background: '#ecf0f1' }}>
      <h1 style={{ color: '#3498db' }}>Teaching Innovations</h1>
      <form onSubmit={handleFormSubmit}>
        <label style={{ display: 'block', marginBottom: '12px' }}>
          Title:
          <input
            type="text"
            name="Title"
            value={innovation.Title}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '12px' }}>
          Faculty:
          <input
            type="text"
            name="Faculty"
            value={innovation.Faculty}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '12px' }}>
          Description:
          <textarea
            name="Description"
            value={innovation.Description}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '12px' }}>
          Criteria:
          <textarea
            name="Criteria"
            value={innovation.Criteria}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </label>
        <label style={{ display: 'block', marginBottom: '12px' }}>
          Image:
          <input
            type="file"
            name="Image"
            onChange={handleInputChange}
            accept="image/*"
          />
        </label>
        <label style={{ display: 'block', marginBottom: '12px' }}>
          Document:
          <input
            type="file"
            name="Document"
            onChange={handleInputChange}
            accept=".pdf,.doc,.docx"
          />
        </label>
        <button type="submit" style={{ background: '#e74c3c', color: '#ecf0f1', padding: '10px', border: 'none', cursor: 'pointer', width: '100%' }}>
          Submit Innovation
        </button>
      </form>

      <h2 style={{ color: '#333333', marginTop: '20px' }}>Recent Innovations:</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {innovationsList.map((item, index) => (
          <li key={index} style={{ borderBottom: '1px solid #bdc3c7', padding: '16px 0', textAlign: 'left' }}>
            <strong>Title:</strong> {item.Title} <br />
            <strong>Faculty:</strong> {item.Faculty} <br />
            <strong>Description:</strong> {item.Description} <br />
            <strong>Criteria:</strong> {item.Criteria} <br />
            {item.Image && <img src={URL.createObjectURL(item.Image)} alt="Innovation" width="100" height="100" style={{ marginBottom: '8px' }} />}
            {item.Document && (
              <a href={URL.createObjectURL(item.Document)} target="_blank" rel="noopener noreferrer" style={{ display: 'block', margin: '8px 0' }}>
                View Document
              </a>
            )}
            {/* Add additional fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachingInnovations;
