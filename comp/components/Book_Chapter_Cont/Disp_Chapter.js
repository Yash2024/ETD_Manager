import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Webinaar_disp.module.css'
import BookChapterManager from './Manage_chapter';

export default function DisplayBookChapters() {
  const [BookChapters, setChapters] = useState([]);
  
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get('/api/chapterRoutes');
        setChapters(response.data);
      } catch (error) {
        console.error('Error fetching Book Chapters:', error);
      }
    };

    fetchChapters();
  }, []);

  const deleteChapters = async (chapter) => {
    
    const chapterId=chapter._id;
    let currChapters;
    // console.log(journalId);
    axios.delete(`/api/chapterRoutes/${chapterId}`)
    .then(async () => {
        currChapters = await axios.get('/api/chapterRoutes');
      setChapters(currChapters.data);
      alert('Book Chapter deleted successfully');
    })
    .catch((error) => {
      console.error('Error deleting Book Chapter:', error);
      alert('Error deleting Book Chapter');
    });

      
  }

  return (
    <div>
    <div className={styles.container}>
    <h1 className={styles.title}>All Book Chapters </h1>
      <ul className={styles.ul}>
        {BookChapters.map(chapter => (
          <li className={styles.li} key={chapter._id}>
            <strong className={styles.strong}>Title:</strong> {chapter.Title}<br />
            <strong className={styles.strong}>Book Title:</strong> {chapter.Book_Title}<br />
            <strong className={styles.strong}>Editor:</strong> {chapter.Editor}<br />
            <strong className={styles.strong}>Publisher:</strong> {chapter.Publisher}<br />
            <strong className={styles.strong}>ISSN/ISBN No.:</strong> {chapter.ISBNNo}<br />
            <strong className={styles.strong}>No Of Co-Authors:</strong> {chapter.No_Authors}<br />
            <strong className={styles.strong}>Publication Date:</strong> {chapter.Publication_Date}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button onClick={() => deleteChapters(chapter)}> DELETE </button> <br />
          </li>
        ))}
      </ul>
      </div>
      <BookChapterManager />
    </div>
    
  );
}
