import React from 'react';
import './Education.css';
import scalerSchoolImage from './images/scaler-school.png';
import bitsPilaniImage from './images/bits-pilani.png';
import certificationImage from './images/certification.png';

function Education({ darkMode }) {
  const certifications = [
    {
      name: "Introduction to Data Analytics",
      link: "https://coursera.org/share/3566faedc7da0517be25f757d3eb30f7",
    },
    {
      name: "Excel Basic for Data Analytics",
      link: "https://coursera.org/share/3c16709e50a850d8d17bcdae55660bb3",
    },
    {
      name: "Data Visualization and Dashboard with Excel and Cognos",
      link: "https://coursera.org/share/85bf64c300fe76e16b5fa495b7d9e726",
    },
    {
      name: "Python for Data Science, AI & Development",
      link: "https://coursera.org/share/15ef17dc4190df12f1bfebbee9207088",
    },
    {
      name: "Python Project for Data Science",
      link: "https://coursera.org/share/6e76bb8a4a8fb5e027ecd80f09452b3a",
    },
    {
      name: "Database and SQL for Data Science with Python",
      link: "https://www.coursera.org/learn/sql-data-science/home/module/5",
    },
  ];

  return (
    <div className={darkMode ? "education dark" : "education"}>
      <h1>Education</h1>
      <div className="education-section">
        <div className="education-card">
          <img src={scalerSchoolImage} alt="Scaler School of Technology" />
          <div className="education-details">
            <h2>Scaler School of Technology</h2>
            <h3>Bachelor & Master</h3>
            <h4>2023 - 2027</h4>
          </div>
        </div>
        <div className="education-card">
          <img src={bitsPilaniImage} alt="Birla Institute of Technology and Science" />
          <div className="education-details">
            <h2>Birla Institute of Technology and Science</h2>
            <h3>Bachelor of Science in Computer Science</h3>
            <h4>2023 - 2026</h4>
          </div>
        </div>
      </div>

      <h1>Certification</h1>
      <div className="certification-section">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <img src={certificationImage} alt={cert.name} />
            <div className="certification-details">
              <p>{cert.name}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="link-icon">
                🔗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;