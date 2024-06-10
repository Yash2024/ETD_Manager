import { useState } from 'react';
import Axios from 'axios';
import styles from '../../styles/webinaar_form.module.css'

export default function ResearchManager() {
  const [formData, setFormData] = useState({
    Title: '',
    St_Date: '',
    Duration: '',
    Amount: '',
    Sanc_agency: '',
    Faculty: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // console.log(response.data);
        
        const ResearchObj = {
            Title: formData.Title,
            St_Date: formData.St_Date,
            Duration: formData.Duration,
            Amount: formData.Amount,
            Sanc_agency: formData.Sanc_agency,
            Faculty: formData.Faculty,
            
        };
        console.log(ResearchObj);
        await Axios.post('/api/Res_pro_routes', ResearchObj).then(() => {
            alert('Research Added');
        });

        setFormData({
            Title: '',
            St_Date: '',
            Duration: '',
            Amount: '',
            Sanc_agency: '',
            Faculty: ''
        });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Research / Consultancy</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Title:</label>
          <input type="text" name="Title" value={formData.Title} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Start Date:</label>
          <input type="date" name="St_Date" value={formData.St_Date} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Duration:</label>
          <input type="text" name="Duration" value={formData.Duration} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Amount:</label>
          <input type="text" name="Amount" value={formData.Amount} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Sanction Agency:</label>
          <input type="text" name="Sanc_agency" value={formData.Sanc_agency} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Faculty:</label>
          <input type="text" name="Faculty" value={formData.Faculty} onChange={handleChange} className={styles['input-field']} />
        </div>
        
        <button type="submit" className={styles['submit-button']}>Submit</button>
      </form>
    </div>
  );
}
