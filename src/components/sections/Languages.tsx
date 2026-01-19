import React from 'react';
import { motion } from 'framer-motion';

const Languages: React.FC = () => {
    return (
        <section id="languages" style={{ padding: '2rem 3rem', background: 'var(--bg-secondary)', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 600 }}>Idiomas</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>

                {/* Spanish */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        background: 'rgba(255,255,255,0.03)',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Español</span>
                        <span style={{ color: 'var(--accent-cyan)' }}>Nativo</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.2 }}
                            style={{ height: '100%', background: 'var(--accent-cyan)' }}
                        />
                    </div>
                </motion.div>

                {/* English */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        background: 'rgba(255,255,255,0.03)',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Inglés</span>
                        <span style={{ color: 'var(--accent-blue)' }}>Intermedio (B1)</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '60%' }} // B1 approx 60%
                            transition={{ duration: 1, delay: 0.3 }}
                            style={{ height: '100%', background: 'var(--accent-blue)' }}
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Languages;
