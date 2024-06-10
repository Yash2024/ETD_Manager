import { useState } from 'react';
import Axios from 'axios';
import styles from '../../styles/webinaar_form.module.css'

export default function SportManager() {
  const [formData, setFormData] = useState({
    Game_name: '',
    Player_name: '',
    Team_name: '',
    Loca: '',
    Position: '',
    Certificate_id: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // console.log(response.data);
        
        const SportObj = {
            Game_name: formData.Game_name,
            Player_name: formData.Player_name,
            Team_name: formData.Team_name,
            Loca: formData.Loca,
            Position: formData.Position,
            Certificate_id: formData.Certificate_id 
            
        };
        console.log(SportObj);
        await Axios.post('/api/sport_routes', SportObj).then(() => {
            alert('Sport Added Successfully');
        });

        setFormData({
            Game_name: '',
            Player_name: '',
            Team_name: '',
            Loca: '',
            Position: '',
            Certificate_id: ''
        });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Add Sport</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Game Name:</label>
          <input type="text" name="Game_name" value={formData.Game_name} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Player Name:</label>
          <input type="text" name="Player_name" value={formData.Player_name} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Team Name:</label>
          <input type="text" name="Team_name" value={formData.Team_name} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Location of Organisation:</label>
          <input type="text" name="Loca" value={formData.Loca} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Position Achieved:</label>
          <input type="text" name="Position" value={formData.Position} onChange={handleChange} className={styles['input-field']} />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['form-label']}>Certificate Id:</label>
          <input type="text" name="Certificate_id" value={formData.Certificate_id} onChange={handleChange} className={styles['input-field']} />
        </div>
        
        <button type="submit" className={styles['submit-button']}>Submit</button>
      </form>
    </div>
  );
}
