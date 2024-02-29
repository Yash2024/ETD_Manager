"use client";

import {React,  useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import HodPortal from '../../hod-portal/page';
import VisionAndMission from '../../components/vision-and-mission'; // Import the VisionAndMission component
import FacilitiesAndTechSupport from '@/app/components/facilities-and-tech-support';
import AnnouncementsManage from '@/app/components/announcements_manage';
import AddFaculty from '@/app/components/addFaculty';
import FacDisp from '@/app/components/facdisp';
import styles from '@/app/styles/sidebar.module.css'
const HodSection = () => {
  const router = useRouter();
  

  const [section, changeSection] = useState('vision-and-mission');
    
// console.log(section);
  // Map section to corresponding component
//   console.log(section[0]);
  const sectionComponents = {
    'vision-and-mission': <VisionAndMission />, // Render VisionAndMission component directly
    'facilities-and-technical-support': <FacilitiesAndTechSupport />,
    'announcements_manage': <AnnouncementsManage />,
    'AddFaculty': <AddFaculty />,
    'facdisp': <FacDisp />,
    // Add mappings for other sections
  };

  return (
    <>
    {/* <div className={`${styles.exnav}`}> */}
    
      <nav className={`${styles.nav}`} >
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
        </ul>
      </nav>

      {/* </div> */}
      {sectionComponents[section]} 
      </>
  );
  
};

export default HodSection;