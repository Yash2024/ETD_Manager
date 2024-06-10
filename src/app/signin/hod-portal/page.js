"use client";

import {React,  useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import HodPortal from '../../hod-portal/page';
import VisionAndMission from '../../../../comp/components/vision-and-mission'; // Import the VisionAndMission component
import FacilitiesAndTechSupport from '../../../../comp/components/facilities-and-tech-support';
import AnnouncementsManage from '../../../../comp/components/announcements_manage';
import AddFaculty from '../../../../comp/components/addFaculty';
import FacDisp from '../../../../comp/components/facdisp';
import Disp_Webinaar from '../../../../comp/components/Webinaar_CMP/Disp_Webinaar';
import DisplayResearches from '../../../../comp/components/Res_pro_cons/Disp_Res';
import DisplayPublications from '../../../../comp/components/Publications_Cont/Disp_Publications';
import DisplayInternships from '../../../../comp/components/Internship_Cont/Disp_intern';
import DisplaySports from '../../../../comp/components/sports_cont/disp_sports';
import styles from '../../../../comp/styles/sidebar.module.css';
import DisplayBookChapters from '../../../../comp/components/Book_Chapter_Cont/Disp_Chapter';
import Head from 'next/head';
const HodSection = () => {
  const router = useRouter();
  

  const [section, changeSection] = useState('vision-and-mission');
  const [showMenu, setShowMenu] = useState(false);
// console.log(section);
  // Map section to corresponding component
//   console.log(section[0]);
  const sectionComponents = {
    'vision-and-mission': <VisionAndMission />, // Render VisionAndMission component directly
    'facilities-and-technical-support': <FacilitiesAndTechSupport />,
    'announcements_manage': <AnnouncementsManage />,
    'AddFaculty': <AddFaculty />,
    'facdisp': <FacDisp />,
    'Webinar-Conference': <Disp_Webinaar />,
    'Research-Consultancy': <DisplayResearches />,
    'Publication': <DisplayPublications />,
    'Internships': <DisplayInternships />,
    'Book-Chapter': <DisplayBookChapters />,
    'sport': <DisplaySports />
    // Add mappings for other sections
  };

  return (
    <>
    {/* <div className={`${styles.exnav}`}> */}
    <Head>
        <title>ETD Prabandhak</title>
      </Head>
    <button onClick={()=> {setShowMenu((prev) => !prev)}}>{showMenu ? "Close":"Open"} Menu</button>
      {showMenu && <nav className={`${styles.nav}`} >
        <ul className={`${styles.cont}`}>
          <li>
            <Link href="" onClick={()=>changeSection('vision-and-mission')}>
            <div className={`${styles.link}`}>Vision and Mission</div>
            </Link>
          </li>
          
          <li>
            <Link href="" onClick={()=>changeSection('facilities-and-technical-support')}>
            <div className={`${styles.link}`}>Facilities and Technical Support</div>
            </Link>
          </li>
          <li>
            <Link href="" onClick={()=>changeSection('announcements_manage')}>
            <div className={`${styles.link}`}>Announcements</div>
            </Link>
          </li>
          <li>
            <Link href="" onClick={()=>changeSection('AddFaculty')}>
            <div className={`${styles.link}`}>Add Faculty</div>
            </Link>
          </li>
          <li>
            <Link href="" onClick={()=>changeSection('facdisp')}>
            <div className={`${styles.link}`}>All Faculty</div>
            </Link>
          </li>
          <li>
            <Link href="" onClick={()=>changeSection('Webinar-Conference')}>
            <div className={`${styles.link}`}>Webinar/Conference</div>
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
            <Link href="" onClick={()=>changeSection('Internships')}>
            <div className={`${styles.link}`}>Internships/Training</div>
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

      {/* </div> */}
      {sectionComponents[section]} 
      </>
  );
  
};

export default HodSection;