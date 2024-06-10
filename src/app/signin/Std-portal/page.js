"use client";

import {React,  useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ManageInnovation from '../../../../comp/components/manageInnovations'
import WebinarManage from '../../../../comp/components/Webinaar_CMP/Manage_Webinaar';
import ResearchManager from '../../../../comp/components/Res_pro_cons/Manage_Res';
import InternshipManager from '../../../../comp/components/Internship_Cont/Mange_intern';
import StudentData from '../../../../comp/components/Std_Details/Std-Data';
import SportManager from '../../../../comp/components/sports_cont/manage_sports';
import styles from '../../../../comp/styles/sidebar.module.css';

const facultySection = () => {
  const router = useRouter();
  

  const [section, changeSection] = useState('std-info');
  const [showMenu, setShowMenu] = useState(false);  
  const sectionComponents = {
    'std-info': <StudentData/>,
    'manage-innovation': <ManageInnovation />,
    'Webinaar-Conference': <WebinarManage />,
    'Research-Consultancy': <ResearchManager />,
    'Internship-Training': <InternshipManager />,
    'add-sport':<SportManager />
    // Add mappings for other sections
  };

  return (
    // className={`${styles.menuButton} ${showMenu ? styles.menuButtonSide : null}`} //style for open close button
    <>
    <Head>
        <title>ETD Prabandhak</title>
      </Head>
      <button  onClick={()=> {setShowMenu((prev) => !prev)}}>{showMenu ? "Close":"Open"} Menu</button>
      {showMenu && <nav className={`${styles.nav}`} >
        <ul className={`${styles.cont}`} >
          <li>
            <Link href="" onClick={()=>changeSection('std-info')}>
              <div className={`${styles.link}`}>Student Details</div>
            </Link>
          </li>
          <li>
            <Link href="" onClick={()=>changeSection('Webinaar-Conference')}>
              <div className={`${styles.link}`}>Webinars or Conferences</div>
            </Link>
          </li>

          <li>
            <Link href="" onClick={()=>changeSection('manage-innovation')}>
              <div className={`${styles.link}`}>Innovations</div>
            </Link>
          </li>

          <li>
            <Link href="" onClick={()=>changeSection('Research-Consultancy')}>
              <div className={`${styles.link}`}>Reasearch and Consultancy</div>
            </Link>
          </li>

          <li>
            <Link href="" onClick={()=>changeSection('Internship-Training')}>
              <div className={`${styles.link}`}>Internships and Trainings</div>
            </Link>
          </li>

          <li>
            <Link href="" onClick={()=>changeSection('add-sport')}>
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