import React from 'react';
import { motion } from 'framer-motion';

const education = [
    {
        role: 'Ingeniería de Sistemas',
        org: 'Universidad Autónoma del Caribe',
        period: '2023 – 2027',
    },
    {
        role: 'Diseño Gráfico',
        org: 'CODETEC',
        period: '2022',
    }
];

const experience = [
    {
        role: 'Desarrollo Full Stack',
        company: 'Proyecto Sonorize',
        period: 'Marzo 2025',
        desc: [
            'Desarrollo completo del sistema Sonorize, integrando frontend y backend bajo arquitectura modular y orientada a componentes.',
            'Construcción del frontend en React, TypeScript y JavaScript, aplicando principios de escalabilidad, atomic design y manejo de estados.',
            'Diseño e implementación del backend con manejo de servicios, API REST, microservicios ligeros y estructura MVC.',
            'Modelado de datos, creación de diagramas de clases, diagramas de flujo y definición de estructura arquitectónica.',
            'Aplicación de metodologías ágiles (Scrum, RUP) desde el levantamiento de requerimientos hasta las entregas incrementales.',
            'Documentación técnica del sistema, elaboración de wireframes y diseño de la lógica de negocio.',
            'Tecnologías: React, JavaScript, Node.js APIs REST, UML, Scrum, RUP, PostgreSQL.'
        ]
    },
    {
        role: 'Desarrollador Full Stack',
        company: 'Digital Dream Co',
        period: 'Junio 2024 – Marzo 2025',
        desc: [
            'Desarrollo de interfaces web responsivas a partir de diseños en Figma.',
            'Implementación de soluciones con Laravel, PHP y WordPress.',
            'Frontend en React, TypeScript y JavaScript usando Atomic Design.',
            'Backend con APIs REST, arquitectura MVC.',
            'Tecnologías: Laravel, React, Node.js, PostgreSQL, MySQL.'
        ]
    },
    {
        role: 'Metodologías de Trabajo',
        company: 'Scrum & RUP',
        period: 'Transversal',
        desc: [
            'Aplicación de Scrum para la gestión ágil de proyectos, sprints y entregas continuas.',
            'Uso de RUP (Rational Unified Process) para el análisis, diseño y documentación estructurada del software.',
            'Participación en ceremonias ágiles: Daily Standups, Sprint Planning y Retrospectives.',
            'Gestión eficiente de requerimientos y control de cambios durante el ciclo de vida del desarrollo.'
        ]
    }
];

const Resume: React.FC = () => {
    return (
        <section id="resume" style={{ padding: '4rem 3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 600 }}>Curriculum</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>

                {/* Education */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-blue)' }}>Educación</h3>
                    <div style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{ marginBottom: '2rem', position: 'relative' }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    left: '-2.4rem',
                                    top: '0.2rem',
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-blue)'
                                }}></div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{edu.role}</h4>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{edu.org} | {edu.period}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-cyan)' }}>Experiencia</h3>
                    <div style={{ borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{ marginBottom: '2rem', position: 'relative' }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    left: '-2.4rem',
                                    top: '0.2rem',
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-cyan)'
                                }}></div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{exp.role}</h4>
                                <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                    {exp.company} | {exp.period}
                                </div>
                                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                    {exp.desc.map((d, i) => (
                                        <li key={i} style={{ marginBottom: '0.3rem' }}>• {d}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Resume;
