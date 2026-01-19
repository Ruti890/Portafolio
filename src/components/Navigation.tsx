import React from 'react';
import { motion } from 'framer-motion';

const pages = [
    { name: 'About', id: 'about' },
    { name: 'Resume', id: 'resume' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
];

const Navigation: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <ul className="nav-links">
                {pages.map((page) => (
                    <li key={page.name}>
                        <a
                            className="nav-link"
                            onClick={() => scrollToSection(page.id)}
                        >
                            {page.name}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navigation;
