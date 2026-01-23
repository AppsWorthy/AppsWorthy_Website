'use client';

import { Typography, Button } from '@mui/material';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Typography className={styles.logo}>
                    Apps<span style={{ color: '#2563eb' }}>Worthy</span>
                </Typography>

                <nav className={styles.nav}>
                    <span className={styles.navLink}>Home</span>
                    <span className={styles.navLink}>Our Apps</span>
                    <span className={styles.navLink}>Benefits</span>
                    <Button variant="contained" color="primary">Get Started</Button>
                </nav>
            </div>
        </header>
    );
}
