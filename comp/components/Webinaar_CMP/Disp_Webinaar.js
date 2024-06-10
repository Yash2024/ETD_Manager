import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Webinaar_disp.module.css'
import WebinarManage from './Manage_Webinaar';

export default function DisplayWebinars() {
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const response = await axios.get('/api/webinaar_routes');
        setWebinars(response.data);
      } catch (error) {
        console.error('Error fetching webinars:', error);
      }
    };

    fetchWebinars();
    }, []);

    const deleteWebinaars = async (webinar) => {
      
      const webinarId=webinar._id;
      let currWebinars;
      // console.log(journalId);
      axios.delete(`/api/webinaar_routes/${webinarId}`)
      .then(async () => {
          currWebinars = await axios.get('/api/webinaar_routes');
        setWebinars(currWebinars.data);
        alert('Webinaar deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting Book Webinaar:', error);
        alert('Error deleting Webinaar');
      });

        
    }

  return (
    <div>
    <div className={styles.container}>
    <h1 className={styles.title}>All Webinars</h1>
      <ul className={styles.ul}>
        {webinars.map(webinar => (
          <li className={styles.li} key={webinar._id}>
            <strong className={styles.strong}>Title:</strong> {webinar.Title}<br />
            <strong className={styles.strong}>Date:</strong> {webinar.Date}<br />
            <strong className={styles.strong}>ISSN / ISBN No.:</strong> {webinar.Topic}<br />
            <strong className={styles.strong}>Faculty:</strong> {webinar.Faculty}<br />
            <strong className={styles.strong}>Details of Conference:</strong> {webinar.Designation}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={() => deleteWebinaars(webinar)}> DELETE </button> <br />
          </li>
        ))}
      </ul>
      </div>
      <WebinarManage />
    </div>
    
  );
}
