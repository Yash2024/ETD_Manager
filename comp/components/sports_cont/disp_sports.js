import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Webinaar_disp.module.css'
import SportManager from './manage_sports';

export default function DisplaySports() {
  const [Sports, setSports] = useState([]);
  
  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await axios.get('/api/sport_routes');
        setSports(response.data);
      } catch (error) {
        console.error('Error fetching Sports:', error);
      }
    };

    fetchSports();
  }, []);

  const deleteSports = async (sport) => {
    
    const sportId=sport._id;
    let currSports;
    // console.log(journalId);
    axios.delete(`/api/sport_routes/${sportId}`)
    .then(async () => {
        currSports = await axios.get('/api/sport_routes');
      setSports(currSports.data);
      alert('Sports deleted successfully');
    })
    .catch((error) => {
      console.error('Error deleting Sports:', error);
      alert('Error deleting Sports');
    });

      
  }

  return (
    <div>
    <div className={styles.container}>
    <h1 className={styles.title}>All Sports Information</h1>
      <ul className={styles.ul}>
        {Sports.map(sport => (
          <li className={styles.li} key={sport._id}>
            <strong className={styles.strong}>Game Name:</strong> {sport.Game_name}<br />
            <strong className={styles.strong}>Player Name:</strong> {sport.Player_name}<br />
            <strong className={styles.strong}>Team Name:</strong> {sport.Team_name}<br />
            <strong className={styles.strong}>Location of Organisation:</strong> {sport.Loca}<br />
            <strong className={styles.strong}>Position Achieved:</strong> {sport.Position}<br />
            <strong className={styles.strong}>Certificate Id:</strong> {sport.Certificate_id}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={() => deleteSports(sport)}> DELETE </button> <br />
          </li>
        ))}
      </ul>
      </div>
      <SportManager />
    </div>
    
  );
}
