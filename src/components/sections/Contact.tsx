import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'' | 'success' | 'submitting'>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate sending
        setTimeout(() => {
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" style={{ padding: '4rem 3rem', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 600 }}>Contacto</h2>

            <div style={{ maxWidth: '600px' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Nombre</label>
                        <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={e => setFormState({ ...formState, name: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--bg-secondary)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: 'white'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                        <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={e => setFormState({ ...formState, email: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--bg-secondary)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: 'white'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Mensaje</label>
                        <textarea
                            rows={5}
                            required
                            value={formState.message}
                            onChange={e => setFormState({ ...formState, message: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--bg-secondary)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: 'white',
                                resize: 'none'
                            }}
                        />
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            padding: '1rem',
                            background: 'var(--accent-gradient)',
                            border: 'none',
                            borderRadius: '8px',
                            color: 'white',
                            fontWeight: 600,
                            cursor: 'pointer',
                            marginTop: '1rem'
                        }}
                    >
                        {status === 'submitting' ? 'Enviando...' : status === 'success' ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
