import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';
import profileImg from '../assets/Profile.jpeg';
import resumePdf from '../assets/Praneeth VP.pdf';

const Hero = () => {
  const { name, title, subtitle, cta } = portfolioData.hero;

  return (
    <section className="hero section container">
      <div className="hero-grid">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">
            {name} <br />
            {title}
          </h1>
          <p className="hero-subtitle">
            {subtitle}
          </p>
          <div className="hero-cta">
            <a href={cta[0].href} className="btn btn-filled">{cta[0].label}</a>
            <a href={resumePdf} download="Praneeth_VP_Resume.pdf" className="btn">Download Resume</a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={profileImg} alt={name} className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
