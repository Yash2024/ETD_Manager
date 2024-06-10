// pages/components/AnnouncementsManage.js
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import axios from 'axios';

const AnnouncementsManage = () => {
  // Color scheme
  const primaryColor = '#3498db';
  const secondaryColor = '#2ecc71';
  const backgroundColor = '#ecf0f1';
  const accentColor = '#e74c3c';
  const textColor = '#333333';
  const highlightColor = '#f39c12';

  // Mock data for initial list of announcements
  let currAnnouncements;
  let initialAnnouncementList = [{Title: '',Faculty: '',Date: '2024-01-17T00:00:00.000Z',Content: '',}];

  const getCurrAnnouncements = async () => {
    try {
      currAnnouncements = await Axios.get('/api/announce_routes');
      initialAnnouncementList = currAnnouncements.data;
      console.log(initialAnnouncementList);
      setAnnouncementList(initialAnnouncementList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getCurrAnnouncements();
  }, []);

  const deleteAnnouncement = async (announcement) => {
    
    const announcementId=announcement._id;
    console.log(announcementId);
    axios.delete(`/api/announce_routes/${announcementId}`)
    .then(async () => {
        currAnnouncements = await Axios.get('/api/announce_routes');
      initialAnnouncementList = currAnnouncements.data;
      console.log(initialAnnouncementList);
      setAnnouncementList(initialAnnouncementList);
      alert('Announcement deleted successfully');
    })
    .catch((error) => {
      console.error('Error deleting announcement:', error);
      alert('Error deleting announcement');
    });

      
  }

  const [announcementList, setAnnouncementList] = useState(initialAnnouncementList);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    Title: '',
    Faculty: '',
    Date: '',
    Content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const announcementObj = {
      Title: formData.Title,
      Faculty: formData.Faculty,
      Date: formData.Date,
      Content: formData.Content,
    };
    
    await Axios.post('/api/announce_routes', announcementObj).then(() => {
      alert('Announcement Added');
    });
    
    setAnnouncementList((prevAnnouncementList) => [...prevAnnouncementList, formData]);
    
    setFormData({
      Title: '',
      Faculty: '',
      Date: '',
      Content: '',
    });
    setIsFormVisible(false);
  };

  return (
    <div className="centered-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="announcements-container" style={{ background: backgroundColor, padding: '20px', borderRadius: '8px', width: '600px' }}>
        <h1 style={{ color: primaryColor, textAlign: 'center' }}>Manage Announcements</h1>
        <ul>
          {announcementList.map((announcement, index) => (
            <li key={index} className="announcement-item" style={{ color: textColor, justifyContent: 'center', textAlign: 'center' }}>
              <strong style={{ color: '#00e49a' }}>{announcement.Title}</strong> <br />
              <strong>Faculty:</strong> {announcement.Faculty} <br />
              <strong>Date:</strong> {new Date(announcement.Date).toLocaleDateString()} <br />
              <strong>Content:</strong> {announcement.Content} <br />
              <button
                onClick={() => deleteAnnouncement(announcement)}
                style={{ color: '#ff0000', marginTop: '8px', cursor: 'pointer', border: 'none', background: 'none' }}
              >
                DELETE
              </button> <br />
            </li>
          ))}
        </ul>
        <br />
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          style={{ background: accentColor, color: backgroundColor, cursor: 'pointer', padding: '12px', border: 'none', width: '100%' }}
        >
          Add New Announcement
        </button>

        {isFormVisible && (
          <form onSubmit={handleFormSubmit} style={{ marginTop: '20px' }}>
            <h2 style={{ color: primaryColor, textAlign: 'center' }}>Add New Announcement</h2>
            <label style={{ color: textColor, display: 'block', marginBottom: '8px' }}>
              Title:
              <input
                type="text"
                name="Title"
                value={formData.Title}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '16px' }}
              />
            </label>
            <label style={{ color: textColor, display: 'block', marginBottom: '8px' }}>
              Faculty:
              <input
                type="text"
                name="Faculty"
                value={formData.Faculty}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '16px' }}
              />
            </label>
            <label style={{ color: textColor, display: 'block', marginBottom: '8px' }}>
              Date:
              <input
                type="date"
                name="Date"
                value={formData.Date}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '16px' }}
              />
            </label>
            <label style={{ color: textColor, display: 'block', marginBottom: '8px' }}>
              Content:
              <textarea
                name="Content"
                value={formData.Content}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginBottom: '16px', minHeight: '100px' }}
              />
            </label>
            <button type="submit" style={{ background: accentColor, color: backgroundColor, width: '100%', padding: '12px', boxSizing: 'border-box', cursor: 'pointer' }}>
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AnnouncementsManage;
