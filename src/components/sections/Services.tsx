import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaLayerGroup, FaTools } from 'react-icons/fa';

const services = [
    {
        icon: <FaCode />,
        title: 'Desarrollo Full Stack',
        desc: 'Aplicaciones web completas desde el frontend hasta el backend.'
    },
    {
        icon: <FaServer />,
        title: 'APIs REST & Backend',
        desc: 'Arquitecturas robustas, seguras y escalables.'
    },
    {
        icon: <FaLayerGroup />,
        title: 'Diseño UI/UX',
        desc: 'Interfaces modernas basadas en Figma con UX intuitiva.'
    },
    {
        icon: <FaTools />,
        title: 'Mantenimiento',
        desc: 'Optimización de rendimiento y actualizaciones continuas.'
    }
];

const Services: React.FC = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="services" style={{ padding: '2rem 3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 600 }}>Servicios</h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            textAlign: 'center'
                        }}
                    >
                        <div style={{
                            fontSize: '2.5rem',
                            color: 'var(--accent-cyan)',
                            marginBottom: '1rem'
                        }}>
                            {service.icon}
                        </div>
                        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{service.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{service.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;
