"use client";

import {React,  useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AnnouncementsManage from '@/app/components/announcements_manage';
import FacultyData from '@/app/components/facultyData'
import FacilitiesAndTechSupport from '@/app/components/facilities-and-tech-support';
import ManageInnovation from '@/app/components/manageInnovations'
const facultySection = () => {
  const router = useRouter();
  

  const [section, changeSection] = useState('faculty_data');
    
// console.log(section);
  // Map section to corresponding component
//   console.log(section[0]);
  const sectionComponents = {
    'faculty_data':<FacultyData />,
    'announcements_manage': <AnnouncementsManage />, 
    'facilities-and-technical-support': <FacilitiesAndTechSupport />,
    'manage-innovation': <ManageInnovation />
    // Add mappings for other sections
  };

  return (
    <>
      <nav>
        <ul>
        <li>
            <Link href="" onClick={()=>changeSection('faculty_data')}>
              Faculty Data
            </Link>
          </li>
          <li>
            <Link href="" onClick={()=>changeSection('announcements_manage')}>
              Announcements
            </Link>
          </li>
          
          <li>
            <Link href="" onClick={()=>changeSection('facilities-and-technical-support')}>
              Webinars
            </Link>
          </li>

          <li>
            <Link href="" onClick={()=>changeSection('manage-innovation')}>
              Innovations
            </Link>
          </li>
          
        </ul>
      </nav>
      
      {sectionComponents[section]} 
      </>
  );
  
};

export default facultySection;