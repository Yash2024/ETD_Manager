import { useState } from 'react';
import Axios from 'axios';
import styles from '../../styles/webinaar_form.module.css'

export default function BookChapterManager() {
  const [formData, setFormData] = useState({
    Title: '',
    Book_Title: '',
    Editor: '',
    Publisher: '',
    ISBNNo: '',
    No_Authors: '',
    Publication_Date: '', 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // console.log(response.data);
        
        const ChapterObj = {
            Title: formData.Title,
            Book_Title: formData.Book_Title,
            Editor: formData.Editor,
            Publisher: formData.Publisher,
            ISBNNo: formData.ISBNNo,
            No_Authors: formData.No_Authors,
            Publication_Date: formData.Publication_Date, 
            
        };
        console.log(ChapterObj);
        await Axios.post('/api/chapterRoutes', ChapterObj).then(() => {
            alert('Book Chapter Added Successfully');
        });

        setFormData({
            Title: '',
            Book_Title: '',
            Editor: '',
            Publisher: '',
            ISBNNo: '',
            No_Authors: '',
            Publication_Date: '', 
        });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add Book Chapter</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Title:</label>
          <input type="text" name="Title" value={formData.Title} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Book Title:</label>
          <input type="text" name="Book_Title" value={formData.Book_Title} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Editor:</label>
          <input type="text" name="Editor" value={formData.Editor} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Publisher:</label>
          <input type="text" name="Publisher" value={formData.Publisher} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>ISSN/ISBN No.:</label>
          <input type="text" name="ISBNNo" value={formData.ISBNNo} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>No Of Co-Authors:</label>
          <input type="text" name="No_Authors" value={formData.No_Authors} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Publication Date:</label>
          <input type="date" name="Publication_Date" value={formData.Publication_Date} onChange={handleChange} className={styles['input-field']} />
        </div>
        
        <button type="submit" className={styles['submit-button']}>Submit</button>
      </form>
    </div>
  );
}
