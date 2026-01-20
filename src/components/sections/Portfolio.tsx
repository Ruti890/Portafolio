import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaExternalLinkAlt, FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
    {
        title: 'Sonorize',
        tags: ['Vue', 'HTML', 'PostgreSQL', 'Postman', 'Microservicios', 'Git'],
        color: '#ff2d20',
        image: '/projects/sonorize.png',
        gallery: [
            '/projects/sonorize.png',
            '/projects/sonorize2.png',
            '/projects/sonorize3.png',
            '/projects/sonorize4.png',
            '/projects/login.jpeg',
            '/projects/sonorize5.png',
            '/projects/peticiones.jpeg'
        ],
        projectUrl: '',
        gitUrl: 'https://github.com/Sonorix'
    },
    {
        title: 'AlquiPc',
        tags: ['React', 'HTML', 'Taiwind'],
        color: '#61dafb',
        image: '/projects/AlquiPc.png',
        gallery: [],
        projectUrl: 'https://alquipc.vercel.app/',
        gitUrl: ''
    },
    {
        title: 'Coffe Time',
        tags: ['React', 'HTML', 'Css'],
        color: '#339933',
        image: '/projects/cafe.png',
        gallery: [],
        projectUrl: 'https://coffeetime-eight.vercel.app/',
        gitUrl: ''
    },
    {
        title: 'GymRat',
        tags: ['Next.js', 'React', 'Css'],
        color: '#8b5cf6',
        image: '/projects/gymrat.png',
        gallery: [],
        projectUrl: 'https://gymrats-tau.vercel.app/',
        gitUrl: ''
    },
    {
        title: 'Invoice Maker Pro',
        tags: ['React', 'JavaScript', 'HTML', 'Css', 'PostgreSQL'],
        color: '#eab308',
        image: '/projects/invoice1.png',
        gallery: [
            '/projects/invoice2.png',
            '/projects/invoice3.png',
            '/projects/inoice4.png',
            '/projects/basedatos.png',
            '/projects/loginfac.png',
            '/projects/capfact.png'
        ],
        projectUrl: '',
        gitUrl: ''
    },
    {
        title: 'BLACK CROWN',
        tags: ['Next', 'React', 'TypeScript'],
        color: '#ec4899',
        image: '/projects/barber.png',
        gallery: [],
        projectUrl: 'https://barbershops-swart.vercel.app/',
        gitUrl: ''
    }
];

const Portfolio: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleOpenGallery = (project: typeof projects[0]) => {
        const images = project.gallery && project.gallery.length > 0
            ? project.gallery
            : (project.image ? [project.image] : []);

        if (images.length > 0) {
            setSelectedProject({ ...project, gallery: images });
            setCurrentImageIndex(0);
        } else if (project.projectUrl) {
            window.open(project.projectUrl, '_blank');
        }
    };

    const handleNextImage = () => {
        if (selectedProject?.gallery) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.gallery!.length - 1 ? 0 : prev + 1
            );
        }
    };

    const handlePrevImage = () => {
        if (selectedProject?.gallery) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1
            );
        }
    };

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
                            background: project.image ? `url(${project.image}) center/cover no-repeat` : `linear-gradient(45deg, ${project.color}, #1f1f1f)`,
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
                                <div onClick={() => handleOpenGallery(project)} style={{ cursor: 'pointer', color: '#fff' }}>
                                    <FaEye size={24} />
                                </div>

                                {project.gitUrl ? (
                                    <a href={project.gitUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex' }}>
                                        <FaGithub size={24} style={{ cursor: 'pointer', color: '#fff' }} />
                                    </a>
                                ) : project.projectUrl ? (
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex' }}>
                                        <FaExternalLinkAlt size={24} style={{ cursor: 'pointer', color: '#fff' }} />
                                    </a>
                                ) : (
                                    <FaExternalLinkAlt size={24} style={{ cursor: 'pointer', color: '#fff', opacity: 0.5 }} />
                                )}
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

            {/* Gallery Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0.9)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <div style={{ position: 'relative', width: '90%', maxWidth: '1000px', height: '80%' }} onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    position: 'absolute',
                                    top: '-40px',
                                    right: 0,
                                    background: 'none',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                <FaTimes size={30} />
                            </button>

                            <div style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                                    <button
                                        onClick={handlePrevImage}
                                        style={{
                                            position: 'absolute',
                                            left: '-50px',
                                            background: 'none',
                                            border: 'none',
                                            color: 'white',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <FaChevronLeft size={40} />
                                    </button>
                                )}

                                <img
                                    src={selectedProject.gallery?.[currentImageIndex]}
                                    alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        borderRadius: '8px'
                                    }}
                                />

                                {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                                    <button
                                        onClick={handleNextImage}
                                        style={{
                                            position: 'absolute',
                                            right: '-50px',
                                            background: 'none',
                                            border: 'none',
                                            color: 'white',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <FaChevronRight size={40} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
