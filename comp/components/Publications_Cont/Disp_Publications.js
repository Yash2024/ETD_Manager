import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Webinaar_disp.module.css'
import PublicationManager from './Manage_Publication';

export default function DisplayPublications() {
  const [publications, setPublications] = useState([]);
  
  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get('/api/publication_routes');
        setPublications(response.data);
      } catch (error) {
        console.error('Error fetching Publications:', error);
      }
    };

    fetchPublications();
  }, []);

  const deleteJournal = async (journal) => {
    
    const journalId=journal._id;
    let currJournals;
    // console.log(journalId);
    axios.delete(`/api/publication_routes/${journalId}`)
    .then(async () => {
        currJournals = await axios.get('/api/publication_routes');
      // initialJournal = currjournals.data;
      // console.log(initialJournal);
      setPublications(currJournals.data);
      alert('Journal deleted successfully');
    })
    .catch((error) => {
      console.error('Error deleting Journal:', error);
      alert('Error deleting Journal');
    });

      
  }

  return (
    <div>
    <div className={styles.container}>
    <h1 className={styles.title}>All Journals</h1>
      <ul className={styles.ul}>
        {publications.map(publication => (
          <li className={styles.li} key={publication._id}>
            <strong className={styles.strong}>Title:</strong> {publication.Title}<br />
            <strong className={styles.strong}>Journal Name:</strong> {publication.Conference}<br />
            <strong className={styles.strong}>ISSN/ISBN No.:</strong> {publication.Book_Chapter}<br />
            <strong className={styles.strong}>Author:</strong> {publication.Faculty}<br />
            <strong className={styles.strong}>No Of Co-Authors:</strong> {publication.Patent}<br />
            <strong className={styles.strong}>Filing Date:</strong> {publication.Filing_Date}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={() => deleteJournal(publication)}> DELETE </button> <br />
          </li>
        ))}
      </ul>
      </div>
      <PublicationManager />
    </div>
    
  );
}
