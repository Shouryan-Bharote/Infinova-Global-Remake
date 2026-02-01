import React from 'react';
import './Divisions.css';
import DivisionsCardGrid from '../../../../components/DivisionCard/DivisionsCardGrid';

const Divisions = () => {
  const divisionsData = [
    {
      id: 1,
      logoSrc: "HomePage/Divisions/Edu_Logo.svg",
      logoAlt: "Eduventures",
      iconSrc: "HomePage/Divisions/textBook.png",
      iconAlt: "Education",
      title: "Job Oriented Courses",
      description: "We prepare students and professionals with industry-relevant skills, bridging the gap between learning and real-world opportunities.",
      path: "/eduventures"
    },
    {
      id: 2,
      logoSrc: "HomePage/Divisions/CON_Logo.svg",
      logoAlt: "Consultants",
      iconSrc: "HomePage/Divisions/growth.png",
      iconAlt: "Strategy",
      title: "Corporate Training and Hiring",
      description: "We help individuals and organizations make informed choices, ensuring career and business growth with the right strategies.",
      path: "/coming-soon"
    },
    {
      id: 3,
      logoSrc: "HomePage/Divisions/TECH_Logo.svg",
      logoAlt: "Technologies",
      iconSrc: "HomePage/Divisions/light.png",
      iconAlt: "Innovation",
      title: "Technical Solutions",
      description: "Through cutting-edge technologies and creative solutions, we drive transformation that shapes industries and empowers the future.",
      path: "/coming-soon"
    }
  ];

  return (
    <div className="division-outer" id="divisionsPage">
      {/* Heading */}
      <div className="division-header">
        <h1 className="division-header-title">Our</h1>
        <h1 className="division-header-title" style={{ color: "#2563eb" }}>
          Division
        </h1>
      </div>

      <DivisionsCardGrid divisionsData={divisionsData} />
    </div>
  );
};

export default Divisions;
