import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './Projects.css';
import portfolioImage from './images/portfolio.png';
import yulu from './images/yulu.png';
import Aerofit from './images/Aerofit.png';
import paystree from './images/paystree.png';
import Quizapp from './images/Quizapp.png';
import Stocks from './images/Stocks.png';

const projects = [
  {
    imgSrc: Stocks,
    title: 'Stock Data Analysis',
    description: [
      'Description point 1 for project 6.',
      'Description point 2 for project 6.',
      'Description point 3 for project 6.',
    ],
    link: 'https://github.com/Anuj-Wanjari/StockDataAnalysis',
  },
  {
    imgSrc: Quizapp,
    title: 'Quiz App',
    description: [
      'Description point 1 for project 5.',
      'Description point 2 for project 5.',
      'Description point 3 for project 5.',
    ],
    link: 'https://github.com/Anuj-Wanjari/Quiz-App',
  },
  {
    imgSrc: paystree,
    title: 'Paystree Analysis',
    description: [
      'Description point 1 for project 4.',
      'Description point 2 for project 4.',
      'Description point 3 for project 4.',
    ],
    link: 'https://github.com/Anuj-Wanjari/Pays-Tree-s-Strategic-Expansion-and-Financial-Analysis',
  },
  {
    imgSrc: Aerofit,
    title: 'Aerofit EDA Analysis',
    description: [
      'Description point 1 for project 3.',
      'Description point 2 for project 3.',
      'Description point 3 for project 3.',
    ],
    link: 'https://github.com/Anuj-Wanjari/Aerofit-Analysis',
  },
  {
    imgSrc: yulu,
    title: 'Yulu EDA & Hypothesis Testing',
    description: [
      'Description point 1 for project 2.',
      'Description point 2 for project 2.',
      'Description point 3 for project 2.',
    ],
    link: 'https://github.com/Anuj-Wanjari/Yulu-Analysis',
  },
  {
    imgSrc: portfolioImage,
    title: 'React Portfolio',
    description: [
      'A Cab Sharing web app made using Django for VIT Students.',
      'Added User authentication and password reset using SendGrid.',
      'Deployed on Heroku using gunicorn.',
    ],
    link: 'https://github.com/Anuj-Wanjari/React-Portfolio',
  },
];

function Projects({ darkMode }) {
  return (
    <div className={darkMode ? 'projects dark' : 'projects'}>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.imgSrc} alt={project.title} />
          <h3>{project.title}</h3>
          <ul>
            {project.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <div className="link-icon">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
