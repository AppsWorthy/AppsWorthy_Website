'use client';

import { Typography, Box } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.content}>
                <Typography variant="h2" className={styles.title}>
                    About AppsWorthy
                </Typography>
                <Typography variant="body1" className={styles.description}>
                    We are a dedicated team of designers and developers obsessed with creating the perfect mobile experience. AppsWorthy designs, builds, and publishes apps that solve real-world problems with elegance and efficiency.
                </Typography>

                <div className={styles.badges}>
                    <div className={styles.badge}>
                        <AppleIcon sx={{ fontSize: 32 }} />
                        <Typography variant="subtitle1" fontWeight="600">App Store</Typography>
                    </div>
                    <div className={styles.badge}>
                        <AndroidIcon sx={{ fontSize: 32, color: '#3DDC84' }} />
                        <Typography variant="subtitle1" fontWeight="600">Google Play</Typography>
                    </div>
                </div>
            </div>
        </section>
    );
}
