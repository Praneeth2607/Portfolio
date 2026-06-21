import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section className="projects section container" id="projects">
      <h2 className="section-title">SELECTED WORK</h2>
      
      <div className="projects-list">
        {projects.map((project, idx) => (
          <motion.div 
            className="project-item" 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="project-header">
              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    GITHUB ↗
                  </a>
                )}
              </div>
              <p className="project-tech">{project.tech.join(' / ')}</p>
            </div>
            
            <div className="project-body">
              <p className="project-subtitle">{project.subtitle}</p>
              <ul className="project-details">
                {project.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
