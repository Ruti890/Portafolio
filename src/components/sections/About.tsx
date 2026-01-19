import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" style={{ padding: '4rem 3rem', maxWidth: '1000px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '2rem',
                    fontWeight: 700,
                    borderLeft: '5px solid var(--accent-cyan)',
                    paddingLeft: '1rem'
                }}>
                    Acerca de mí
                </h2>

                <div style={{ fontSize: '1.1rem', color: 'var(--text-text-secondary)', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Soy <strong>Jesús D. Hoyos Bolaño</strong>, Ingeniero de Sistemas y Desarrollador Full Stack con bases sólidas en programación,
                        bases de datos y arquitectura de software. Me caracterizo por mi pensamiento lógico, atención al detalle y capacidad de aprendizaje rápido.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Cuento con experiencia en proyectos académicos y laborales enfocados en soluciones prácticas y escalables.
                        Me apasiona transformar ideas complejas en interfaces elegantes y funcionales, utilizando las últimas tecnologías del mercado.
                    </p>
                    <p>
                        Además de mis competencias técnicas, destaco por mis <strong>habilidades de liderazgo, trabajo en equipo y comunicación efectiva</strong>.
                        Enfoque proactivo en la resolución de problemas y gestión eficiente del tiempo en entornos ágiles.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
