import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Webinaar_disp.module.css';
import InternshipManager from './Mange_intern';

export default function DisplayInternships() {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get('/api/intern_routes');
        setInternships(response.data);
      } catch (error) {
        console.error('Error fetching Internships:', error);
      }
    };

    fetchInternships();
  }, []);

  const deleteInterns = async (intern) => {
    
    const internId=intern._id;
    let currInterns;
    // console.log(journalId);
    axios.delete(`/api/intern_routes/${internId}`)
    .then(async () => {
        currInterns = await axios.get('/api/intern_routes');
      setInternships(currInterns.data);
      alert('Internship deleted successfully');
    })
    .catch((error) => {
      console.error('Error deleting Internship:', error);
      alert('Error deleting Internship');
    });

      
  }

  return (
    <div>
    <div className={styles.container}>
    <h1 className={styles.title}>All Internships / Trainings</h1>
      <ul className={styles.ul}>
        {internships.map(internship => (
          <li className={styles.li} key={internship._id}>
            <strong className={styles.strong}>Student Name:</strong> {internship.Std_Name}<br />
            <strong className={styles.strong}>Roll No:</strong> {internship.Std_Rollno}<br />
            <strong className={styles.strong}>Semester in which Completed:</strong> {internship.Semester}<br />
            <strong className={styles.strong}>Industry /Research Centre /lab associated:</strong> {internship.INDs}<br />
            <strong className={styles.strong}>Address /Location of Industry:</strong> {internship.IND_Add}<br />
            <strong className={styles.strong}>Title of Internship /Field Work:</strong> {internship.Title}<br />
            <strong className={styles.strong}>Duration of Internship:</strong> {internship.Duration}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={() => deleteInterns(internship)}> DELETE </button> <br />
          </li>
        ))}
      </ul>
      </div>
      <InternshipManager />
    </div>
    
  );
}
