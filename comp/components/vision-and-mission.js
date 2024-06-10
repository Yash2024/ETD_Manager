"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth';

const Vision = () => {
  const [editMode, setEditMode] = useState(false);
  // const { status, data: session } = useSession();


  const visionAndMissionData = {
    vision:
      'Department of Electronics Engineering aims to deliver Technical Education in the field of Electronics and Communication Engineering, for producing Engineers and Technologists who are happy, healthy and competent professionals, motivated to serve the society through research & innovation.',
    mission: [
      'To educate and train the students with state-of-the-art in Electronics and Communication Engineering.',
      'To prepare the students who are fit for meeting the requirements and challenges of the Industry right at the time of their graduation by evolving a sustainable Industry-University interaction system for this.',
      'To upgrade the teaching standards through continued efforts toward improvement of the qualification and expertise of the teachers as well as supporting staff.',
      'To create awareness amongst the students towards socio-environmental technologies by offering related courses and organizing seminars/workshops on these topics in the university and by encouraging participation in similar activities at other places.',
      'To expand research and development activities in the frontier areas related to Electronics and Communication.',
      'To include the aspect of integration of environmental balance and human values in the curriculum.',
      'To provide academic support to other technical institutions at state & national level through the process of networking.',
      'To start social service programs like education for masses, particularly using the enhanced means of communication.',
    ],
    programoutcome: [
        'Engineering Graduates will be able to:',
        '1. Engineering knowledge: Apply the knowledge of mathematics, science, engineeringfundamentals, and an engineering specialization to the solution of complex engineering problems.',
        '2. Problem analysis: Identify, formulate, review research literature, and analyze complexengineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.',
        '3. Design/development of solutions: Design solutions for complex engineering problems anddesign system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.',
        '4. Conduct investigations of complex problems: Use research-based knowledge and researchmethods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.',
        '5. Modern tool usage: Create, select, and apply appropriate techniques, resources, and modernengineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.',
        '6. The engineer and society:Apply reasoning informed by the contextual knowledge to assesssocietal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.',
        '7. Environment and sustainability: Understand the impact of the professional engineering solutionsin societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.',
        '8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms ofthe engineering practice.',
        '9. Individual and team work:Function effectively as an individual, and as a member or leader indiverse teams, and in multidisciplinary settings.',
        '10. Communication: Communicate effectively on complex engineering activities with the engineeringcommunity and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.',
        '11. Project management and finance: Demonstrate knowledge and understanding of theengineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.',
        '12. Life-long learning: Recognize the need for, and have the preparation and ability to engage inindependent and life-long learning in the broadest context of technological change.',
    ],
    PEOS: [
        'Program graduates, within three years from their graduation will',
        'PEO 1: have knowledge of basic and applied sciences, so as to apply the necessary competence for technically sound, economically feasible and socially acceptable solutions of real life complex engineering problems.',
        'PEO 2: be fit for meeting the requirements and challenges of industries, research and academic institutions both at the national and International level, by applying expertise gained in area of electronics and communication engineering.',
        'PEO 3: be professionally competent with excellent communication and management skills along with being enterprising professionals and responsible citizens capable of delivering their services individually as well as in a collaborative framework.',
    ],
    PSOS: [
        'PSO 1: Students should be able to apply the acquired knowledge of core Electronics and Communication Engineering courses in the analysis, design, and solution of Real Life Complex Engineering Problems in teamwork environment.',
        'PSO 2: Student should have ability to absorb and apply modern electronic software and hardware for design and analysis of complex engineering problems. '
    ],
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      <Head>
        <title>HOD Portal</title>
      </Head>
      <style jsx>{`
        div {
          background-color: #ecf0f1; /* Cloud White */
          color: #333333; /* Dark Gray */
          padding: 20px;
          border-radius: 8px;
          margin: 20px;
        }
        h1 {
          color: #3498db; /* Flat Blue */
        }
        h2 {
          color: #2ecc71; /* Emerald Green */
        }
        p,
        li {
          margin: 10px 0;
        }
        textarea {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
        }
        button {
          background-color: #f39c12; /* Sunflower Yellow */
          color: #ecf0f1; /* Cloud White */
          padding: 10px 15px;
          border: none;
          cursor: pointer;
          border-radius: 4px;
        }
      `}</style>
      <h1>Department of Electronics Engineering</h1>
      <div>
        <h2>Vision</h2>
        {editMode ? (
          <textarea defaultValue={visionAndMissionData.vision} />
        ) : (
          <p>{visionAndMissionData.vision}</p>
        )}
      </div>
      <div>
        <h2>Mission</h2>
        {editMode ? (
          <ul>
            {visionAndMissionData.mission.map((item, index) => (
              <li key={index}>
                <textarea defaultValue={item} />
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {visionAndMissionData.mission.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h2>Program Outcomes</h2>
        {editMode ? (
          <ul>
            {visionAndMissionData.programoutcome.map((item, index) => (
              <li key={index}>
                <textarea defaultValue={item} />
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {visionAndMissionData.programoutcome.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h2>PROGRAM EDUCATIONAL OBJECTIVES (PEOS)</h2>
        {editMode ? (
          <ul>
            {visionAndMissionData.PEOS.map((item, index) => (
              <li key={index}>
                <textarea defaultValue={item} />
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {visionAndMissionData.PEOS.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h2>PROGRAM SPECIFIC OUTCOMES (PSOS)</h2>
        {editMode ? (
          <ul>
            {visionAndMissionData.PSOS.map((item, index) => (
              <li key={index}>
                <textarea defaultValue={item} />
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {visionAndMissionData.PSOS.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      {/* {status === "authenticated" ?

      (<button onClick={handleEditClick}>
        {editMode ? 'Save Changes' : 'Edit '}
      </button>):(<></>)
      } */}
    </div>
  );
};

export default Vision;