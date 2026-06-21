import React from 'react';
import { portfolioData } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const { email, location, github, linkedin } = portfolioData.contact;

  return (
    <footer className="footer" id="contact">
      <div className="footer-top container">
        <div className="footer-info">
          <p>{email}</p>
          <p>{location}</p>
        </div>
        <div className="footer-links">
          <a href={github} target="_blank" rel="noreferrer">GITHUB</a>
          <a href={linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
          <p>© {new Date().getFullYear()} — ALL RIGHTS RESERVED</p>
        </div>
      </div>
      
      <div className="footer-massive-text">
        <h1 className="massive-heading">PRANEETH</h1>
        <span className="cursive-overlay">Let's Connect</span>
        <h1 className="massive-heading">PORTFOLIO</h1>
      </div>
    </footer>
  );
};

export default Footer;
