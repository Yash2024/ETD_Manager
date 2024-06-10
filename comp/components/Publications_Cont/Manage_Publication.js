import { useState } from 'react';
import Axios from 'axios';
import styles from '../../styles/webinaar_form.module.css'

export default function PublicationManager() {
  const [formData, setFormData] = useState({
    Title: '',
    Conference: '',
    Book_Chapter: '',
    Patent: '',
    Filing_Date: '',
    Faculty: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // console.log(response.data);
        
        const PublicationObj = {
            Title: formData.Title,
            Conference: formData.Conference,
            Book_Chapter: formData.Book_Chapter,
            Patent: formData.Patent,
            Filing_Date: formData.Filing_Date,
            Faculty: formData.Faculty,
            
        };
        console.log(PublicationObj);
        await Axios.post('/api/publication_routes', PublicationObj).then(() => {
            alert('Publication Added');
        });

        setFormData({
            Title: '',
            Conference: '',
            Book_Chapter: '',
            Patent: '',
            Filing_Date: '',
            Faculty: ''
        });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add Journals</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Title:</label>
          <input type="text" name="Title" value={formData.Title} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Journal Name:</label>
          <input type="text" name="Conference" value={formData.Conference} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>ISSN/ISBN No.:</label>
          <input type="text" name="Book_Chapter" value={formData.Book_Chapter} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Author:</label>
          <input type="text" name="Faculty" value={formData.Faculty} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>No Of Co-Authors:</label>
          <input type="text" name="Patent" value={formData.Patent} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Filing Date:</label>
          <input type="date" name="Filing_Date" value={formData.Filing_Date} onChange={handleChange} className={styles['input-field']} />
        </div>
        
        <button type="submit" className={styles['submit-button']}>Submit</button>
      </form>
    </div>
  );
}
