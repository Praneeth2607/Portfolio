import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const { description, stats } = portfolioData.about;

  return (
    <section className="about section container" id="about">
      <div className="about-grid grid">
        <div className="about-text-col">
          <h2 className="section-title">ABOUT</h2>
          {description.map((p, idx) => (
            <p key={idx} className="about-desc">{p}</p>
          ))}
        </div>
        
        <div className="about-stats-col">
          {stats.map((stat, idx) => (
            <motion.div 
              className="stat-item" 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
