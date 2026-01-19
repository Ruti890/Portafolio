import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: 'Sonorize',
        tags: ['Laravel', 'PHP', 'MySQL'],
        color: '#ff2d20'
    },
    {
        title: 'E-Commerce Dashboard',
        tags: ['React', 'TypeScript', 'Node.js'],
        color: '#61dafb'
    },
    {
        title: 'Task Manager API',
        tags: ['Node.js', 'Express', 'MongoDB'],
        color: '#339933'
    },
    {
        title: 'Proyecto Futuro 1',
        tags: ['Next.js', 'Tailwind', 'Supabase'],
        color: '#8b5cf6'
    },
    {
        title: 'Proyecto Futuro 2',
        tags: ['Python', 'Django', 'Docker'],
        color: '#eab308'
    },
    {
        title: 'Proyecto Futuro 3',
        tags: ['Vue.js', 'Firebase', 'Sass'],
        color: '#ec4899'
    }
];

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" style={{ padding: '4rem 3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 600 }}>Proyectos</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10 }}
                        style={{
                            background: 'var(--bg-secondary)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                        }}
                    >
                        {/* Visual Placeholder */}
                        <div style={{
                            height: '200px',
                            background: `linear-gradient(45deg, ${project.color}, #1f1f1f)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }} className="project-card-image">
                            <motion.div
                                className="overlay"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0, bottom: 0,
                                    background: 'rgba(0,0,0,0.7)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem'
                                }}
                            >
                                <FaEye size={24} style={{ cursor: 'pointer', color: '#fff' }} />
                                <FaExternalLinkAlt size={24} style={{ cursor: 'pointer', color: '#fff' }} />
                            </motion.div>
                        </div>

                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.2rem 0.6rem',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '20px',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
