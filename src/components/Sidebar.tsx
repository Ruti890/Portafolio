import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import profileImg from '../assets/memoji2.png';
import '../App.css';

const Sidebar: React.FC = () => {
  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="profile-container">
        <motion.div
          className="avatar-container"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(6, 182, 212, 0.4)" }}
        >
          <img src={profileImg} alt="Jesús D. Hoyos" className="avatar" />
        </motion.div>

        <h1 className="name">Jesús D. Hoyos</h1>
        <h2 className="role">Full Stack Engineer</h2>

        <div className="info-cards">
          <div className="info-card">
            <FaEnvelope className="icon" />
            <span>jdavid32hoyos@gmail.com</span>
          </div>
          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <span>Barranquilla, Colombia</span>
          </div>
        </div>

        <div className="social-links">
          <motion.a
            href="https://www.linkedin.com/in/jes%C3%BAs-hoyos-08229730b"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#06b6d4' }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#06b6d4' }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
