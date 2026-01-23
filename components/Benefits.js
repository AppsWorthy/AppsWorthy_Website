'use client';

import { Typography, Box } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import BrushIcon from '@mui/icons-material/Brush';
import DevicesIcon from '@mui/icons-material/Devices';
import UpdateIcon from '@mui/icons-material/Update';
import styles from './Benefits.module.css';

const benefits = [
    {
        title: "High Performance",
        text: "Apps optimized for speed and efficiency, ensuring a lag-free experience on every device.",
        icon: <SpeedIcon fontSize="large" />
    },
    {
        title: "Clean UI/UX",
        text: "Modern, intuitive interfaces designed with the user in mind for maximum engagement.",
        icon: <BrushIcon fontSize="large" />
    },
    {
        title: "Cross-Platform",
        text: "Seamless performance across iOS and Android with a unified, polished look and feel.",
        icon: <DevicesIcon fontSize="large" />
    },
    {
        title: "Continuous Updates",
        text: "Regular improvements and new features to keep our apps ahead of the curve.",
        icon: <UpdateIcon fontSize="large" />
    }
];

export default function Benefits() {
    return (
        <section className={styles.benefits}>
            <div className={styles.container}>
                <Typography variant="h2" className={styles.title}>
                    Why Choose AppsWorthy?
                </Typography>

                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.benefitItem}>
                            <div className={styles.iconWrapper}>
                                {benefit.icon}
                            </div>
                            <Typography variant="h5" className={styles.benefitTitle}>
                                {benefit.title}
                            </Typography>
                            <Typography variant="body1" className={styles.benefitText}>
                                {benefit.text}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
