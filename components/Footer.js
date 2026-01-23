'use client';

import { useState, useEffect } from 'react';
import { Typography, Container, Box } from '@mui/material';
import styles from './Footer.module.css';

export default function Footer() {
    const [year, setYear] = useState(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Typography variant="h5" fontWeight="800">
                            Apps<span style={{ color: '#2563eb' }}>Worthy</span>
                        </Typography>
                        <Typography variant="body2" className={styles.tagline}>
                            Building and publishing high-quality mobile experiences that users love. Elevating the standards of app design and performance.
                        </Typography>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <Typography className={styles.copyright}>
                        © {year || '...'} AppsWorthy. All rights reserved.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Typography variant="body2" sx={{ color: '#64748b', cursor: 'pointer', '&:hover': { color: '#fff' } }}>Privacy Policy</Typography>
                        <Typography variant="body2" sx={{ color: '#64748b', cursor: 'pointer', '&:hover': { color: '#fff' } }}>Terms of Service</Typography>
                    </Box>
                </div>
            </div>
        </footer>
    );
}
