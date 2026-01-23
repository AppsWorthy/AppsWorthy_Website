'use client';

import { Typography, Card, Box } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import styles from './OurApps.module.css';

const apps = [
    {
        name: "Zenith Productivity",
        description: "A high-performance task manager designed for professionals who value speed and minimal UI.",
        image: "/images/zenith.png"
    },
    {
        name: "Lumina Edit",
        description: "Professional photo editing on the go with custom filters and AI-enhanced retouching tools.",
        image: "/images/lumina.png"
    },
    {
        name: "Nexus Finance",
        description: "Take control of your wealth with real-time tracking, insights, and automated budgeting.",
        image: "/images/nexus.png"
    }
];

export default function OurApps() {
    return (
        <section className={styles.ourApps}>
            <Typography variant="h2" className={styles.title}>
                Our Featured Apps
            </Typography>

            <div className={styles.grid}>
                {apps.map((app, index) => (
                    <Card key={index} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src={app.image} alt={app.name} className={styles.appImage} />
                        </div>
                        <div className={styles.content}>
                            <Typography variant="h5" className={styles.appName}>
                                {app.name}
                            </Typography>
                            <Typography variant="body2" className={styles.description}>
                                {app.description}
                            </Typography>
                            <div className={styles.footer}>
                                <AppleIcon className={styles.iconLink} />
                                <ShopIcon className={styles.iconLink} />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
