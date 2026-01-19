import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaJs, FaReact, FaAngular, FaNodeJs, FaGitAlt, FaAndroid, FaPhp } from 'react-icons/fa';
import { SiPostgresql, SiMysql } from 'react-icons/si';

const skills = [
    { name: 'Java', icon: <FaJava color="#f89820" /> },
    { name: 'Python', icon: <FaPython color="#3776ab" /> },
    { name: 'JavaScript', icon: <FaJs color="#f7df1e" /> },
    { name: 'PHP', icon: <FaPhp color="#777bb4" /> },
    { name: 'React', icon: <FaReact color="#61dafb" /> },
    { name: 'Angular', icon: <FaAngular color="#dd0031" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479a1" /> },
    { name: 'Android', icon: <FaAndroid color="#3ddc84" /> },
    { name: 'Git', icon: <FaGitAlt color="#f05032" /> },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" style={{ padding: '2rem 3rem', background: 'var(--bg-secondary)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 600, textAlign: 'center' }}>Habilidades Técnicas</h2>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '3rem'
            }}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}>
                            {skill.icon}
                        </div>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
