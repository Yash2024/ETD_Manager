import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Webinaar_disp.module.css'
import ResearchManager from './Manage_Res';

export default function DisplayResearches() {
  const [researches, setResearches] = useState([]);

  useEffect(() => {
    const fetchResearches = async () => {
      try {
        const response = await axios.get('/api/Res_pro_routes');
        setResearches(response.data);
      } catch (error) {
        console.error('Error fetching webinars:', error);
      }
    };

    fetchResearches();
  }, []);

  const deleteResearches = async (research) => {
      
    const researchId=research._id;
    let currResearches;
    // console.log(journalId);
    axios.delete(`/api/Res_pro_routes/${researchId}`)
    .then(async () => {
      currResearches = await axios.get('/api/Res_pro_routes');
      setResearches(currResearches.data);
      alert('Research deleted successfully');
    })
    .catch((error) => {
      console.error('Error deleting Research:', error);
      alert('Error deleting Research');
    });

      
  }

  return (
    <div>
    <div className={styles.container}>
    <h1 className={styles.title}>All Researches</h1>
      <ul className={styles.ul}>
        {researches.map(research => (
          <li className={styles.li} key={research._id}>
            <strong className={styles.strong}>Title:</strong> {research.Title}<br />
            <strong className={styles.strong}>Start Date:</strong> {research.St_Date}<br />
            <strong className={styles.strong}>Duration:</strong> {research.Duration}<br />
            <strong className={styles.strong}>Amount:</strong> {research.Amount}<br />
            <strong className={styles.strong}>Sanction Agency:</strong> {research.Sanc_agency}<br />
            <strong className={styles.strong}>Faculty:</strong> {research.Faculty}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={() => deleteResearches(research)}> DELETE </button> <br />
          </li>
        ))}
      </ul>
      </div>
      <ResearchManager />
    </div>
    
  );
}
