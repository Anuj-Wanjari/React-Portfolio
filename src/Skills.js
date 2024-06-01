import React from 'react';
import './Skills.css';
import javaIcon from './icons/java.png';
import pythonIcon from './icons/python.png';
import htmlIcon from './icons/html.png';
import cssIcon from './icons/css.png';
import jsIcon from './icons/js.png';
import mysqlIcon from './icons/mysql.png';
import reactIcon from './icons/react.png';
import githubIcon from './icons/github1.png';
import colabIcon from './icons/colab.png';
import chatgptIcon from './icons/chatgpt1.png';
import excelIcon from './icons/excel.png';
import tableauIcon from './icons/tableau.png';

function Skills({ darkMode }) {
  const skills = [
    { name: 'Java', icon: javaIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'React', icon: reactIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Google Colab', icon: colabIcon },
    { name: 'ChatGPT', icon: chatgptIcon },
    { name: 'Excel', icon: excelIcon },
    { name: 'Tableau', icon: tableauIcon },
  ];

  return (
    <div className={darkMode ? 'skills dark' : 'skills'}>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className={darkMode ? 'skill-card dark' : 'skill-card'}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
