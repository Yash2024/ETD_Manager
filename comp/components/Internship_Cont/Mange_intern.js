import { useState } from 'react';
import Axios from 'axios';
import styles from '../../styles/webinaar_form.module.css'

export default function InternshipManager() {
  const [formData, setFormData] = useState({
    Std_Name: '',
    Std_Rollno: '',
    Semester: '',
    INDs: '',
    IND_Add: '',
    Title: '',
    Duration: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // console.log(response.data);
        
        const InternshipObj = {
            Std_Name: formData.Std_Name,
            Std_Rollno: formData.Std_Rollno,
            Semester: formData.Semester,
            INDs: formData.INDs,
            IND_Add: formData.IND_Add,
            Title: formData.Title,
            Duration: formData.Duration
            
        };
        console.log(InternshipObj);
        await Axios.post('/api/intern_routes', InternshipObj).then(() => {
            alert('Intership or Training Added Successfully');
        });

        setFormData({
            Std_Name: '',
            Std_Rollno: '',
            Semester: '',
            INDs: '',
            IND_Add: '',
            Title: '',
            Duration: ''
        });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Internship / Training</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Student Name:</label>
          <input type="text" name="Std_Name" value={formData.Std_Name} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Student RollNo:</label>
          <input type="text" name="Std_Rollno" value={formData.Std_Rollno} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Semester:</label>
          <input type="text" name="Semester" value={formData.Semester} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Industry /Research Centre /lab associated:</label>
          <input type="text" name="INDs" value={formData.INDs} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Address /Location of Industry:</label>
          <input type="text" name="IND_Add" value={formData.IND_Add} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Title of Internship /Field Work:</label>
          <input type="text" name="Title" value={formData.Title} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Duration of Internship:</label>
          <input type="text" name="Duration" value={formData.Duration} onChange={handleChange} className={styles['input-field']} />
        </div>
        <button type="submit" className={styles['submit-button']}>Submit</button>
      </form>
    </div>
  );
}
