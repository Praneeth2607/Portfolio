import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section className="experience section container" id="experience">
      <h2 className="section-title">EXPERIENCE</h2>
      
      <div className="experience-timeline">
        {experience.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div 
              className={`timeline-item ${isLeft ? 'left-side' : 'right-side'}`} 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="experience-meta">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-duration">{exp.duration}</p>
              </div>
              
              <div className="experience-details-wrapper">
                <ul className="experience-details">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
