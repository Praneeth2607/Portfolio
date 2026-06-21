import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-item">PORTFOLIO</div>
      <div className="nav-item">FULL STACK DEV</div>
      <div className="nav-item nav-links">
        <a href="#about">ABOUT</a>
        <a href="#projects">WORK</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className="nav-item">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
