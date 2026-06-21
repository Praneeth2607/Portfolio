import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section className="skills section container" id="skills">
      <h2 className="section-title">SKILLS</h2>
      
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div 
            className="skill-category" 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="category-title">{category}</h3>
            <div className="skills-tags">
              {items.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
