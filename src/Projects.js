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
    title: 'Project 6',
    description: [
      'Description point 1 for project 6.',
      'Description point 2 for project 6.',
      'Description point 3 for project 6.',
    ],
    link: 'https://github.com/yourusername/project6',
  },
  {
    imgSrc: Quizapp,
    title: 'Project 5',
    description: [
      'Description point 1 for project 5.',
      'Description point 2 for project 5.',
      'Description point 3 for project 5.',
    ],
    link: 'https://github.com/yourusername/project5',
  },
  {
    imgSrc: paystree,
    title: 'Project 4',
    description: [
      'Description point 1 for project 4.',
      'Description point 2 for project 4.',
      'Description point 3 for project 4.',
    ],
    link: 'https://github.com/yourusername/project4',
  },
  {
    imgSrc: Aerofit,
    title: 'Project 3',
    description: [
      'Description point 1 for project 3.',
      'Description point 2 for project 3.',
      'Description point 3 for project 3.',
    ],
    link: 'https://github.com/yourusername/project3',
  },
  {
    imgSrc: yulu,
    title: 'Project 2',
    description: [
      'Description point 1 for project 2.',
      'Description point 2 for project 2.',
      'Description point 3 for project 2.',
    ],
    link: 'https://github.com/yourusername/project2',
  },
  {
    imgSrc: portfolioImage,
    title: 'Caaring - Cab Share App',
    description: [
      'A Cab Sharing web app made using Django for VIT Students.',
      'Added User authentication and password reset using SendGrid.',
      'Deployed on Heroku using gunicorn.',
    ],
    link: 'https://github.com/yourusername/caaring',
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
