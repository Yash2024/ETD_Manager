"use client";

import {React,  useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AnnouncementsManage from '../../../../comp/components/announcements_manage';
import FacultyData from '../../../../comp/components/facultyData'
import FacilitiesAndTechSupport from '../../../../comp/components/facilities-and-tech-support';
import ManageInnovation from '../../../../comp/components/manageInnovations'
import WebinarManage from '../../../../comp/components/Webinaar_CMP/Manage_Webinaar';
import ResearchManager from '../../../../comp/components/Res_pro_cons/Manage_Res';
import PublicationManager from '../../../../comp/components/Publications_Cont/Manage_Publication';
import BookChapterManager from '../../../../comp/components/Book_Chapter_Cont/Manage_chapter';
import DisplaySports from '../../../../comp/components/sports_cont/disp_sports';
import styles from '../../../../comp/styles/sidebar.module.css';
import Head from 'next/head';

const facultySection = () => {
  const router = useRouter();
  

  const [section, changeSection] = useState('faculty_data');
  const [showMenu, setShowMenu] = useState(false);
// console.log(section);
  // Map section to corresponding component
//   console.log(section[0]);
  const sectionComponents = {
    'faculty_data':<FacultyData />,
    'announcements_manage': <AnnouncementsManage />, 
    'facilities-and-technical-support': <FacilitiesAndTechSupport />,
    'manage-innovation': <ManageInnovation />,
    'Webinaar-Conference': <WebinarManage />,
    'Research-Consultancy': <ResearchManager />,
    'Publication': <PublicationManager />,
    'Book-Chapter': <BookChapterManager />,
    'sport': <DisplaySports />
    // Add mappings for other sections
  };

  return (
    <>
    <Head>
        <title>ETD Prabandhak</title>
      </Head>
      <button onClick={()=> {setShowMenu((prev) => !prev)}}>{showMenu ? "Close":"Open"} Menu</button>
      {showMenu && <nav className={`${styles.nav}`} >
        <ul className={`${styles.cont}`}>
        <li>
            <Link href="" onClick={()=>changeSection('faculty_data')}>
              <div className={`${styles.link}`}>Faculty Data</div>
            </Link>
          </li>
          <li>
            <Link href="" onClick={()=>changeSection('announcements_manage')}>
              <div className={`${styles.link}`}>Announcements</div>
            </Link>
          </li>
          
          <li>
            <Link href="" onClick={()=>changeSection('Webinaar-Conference')}>
              <div className={`${styles.link}`}>Webinars / Conferences</div>
            </Link>
          </li>

          <li>
            <Link href="" onClick={()=>changeSection('manage-innovation')}>
              <div className={`${styles.link}`}>Innovations</div>
            </Link>
          </li>
          
          <li>
            <Link href="" onClick={()=>changeSection('Research-Consultancy')}>
            <div className={`${styles.link}`}>Research/Consultancy</div>
            </Link>
          </li>
          <li>
            <Link href="" onClick={()=>changeSection('Publication')}>
              <div className={`${styles.link}`}>Journals</div>
            </Link>
          </li>
          <li>
            <Link href="" onClick={()=>changeSection('Book-Chapter')}>
            <div className={`${styles.link}`}>Book Chapter</div>
            </Link>
          </li>
          <li>
            <Link href="" onClick={()=>changeSection('sport')}>
              <div className={`${styles.link}`}>Sports</div>
            </Link>
          </li>
        </ul>
      </nav>}
      
      {sectionComponents[section]} 
      </>
  );
  
};

export default facultySection;