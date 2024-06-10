import { useState } from 'react';
import Axios from 'axios';
import styles from '../../styles/webinaar_form.module.css'

export default function WebinarManage() {
  const [formData, setFormData] = useState({
    Title: '',
    Date: '',
    Topic: '',
    Faculty: '',
    Designation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // console.log(response.data);
        
        const webinaarObj = {
            Title: formData.Title,
            Date: formData.Date,
            Faculty: formData.Faculty,
            Topic: formData.Topic,
            Designation: formData.Designation,
        };
        console.log(webinaarObj);
        await Axios.post('/api/webinaar_routes', webinaarObj).then(() => {
            alert('Webinaar Added');
        });

        setFormData({
            Title: '',
            Date: '',
            Topic: '',
            Faculty: '',
            Designation: '',
        });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Webinar / Conference Organized</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Title:</label>
          <input type="text" name="Title" value={formData.Title} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Date:</label>
          <input type="date" name="Date" value={formData.Date} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>ISSN / ISBN No.:</label>
          <input type="text" name="Topic" value={formData.Topic} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Faculty Organizers:</label>
          <input type="text" name="Faculty" value={formData.Faculty} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Details of Conference:</label>
          <input type="text" name="Designation" value={formData.Designation} onChange={handleChange} className={styles['input-field']} />
        </div>
        <button type="submit" className={styles['submit-button']}>Submit</button>
      </form>
    </div>
  );
}
