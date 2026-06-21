import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section className="achievements section container" id="achievements">
      <h2 className="section-title">ACHIEVEMENTS</h2>
      
      <div className="achievements-grid">
        {achievements.map((achievement, idx) => (
          <motion.div 
            className="achievement-card" 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="achievement-icon">★</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-desc">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
