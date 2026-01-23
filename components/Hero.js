'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <Typography variant="h1" className={styles.headline}>
                    Crafting <span style={{ color: '#2563eb' }}>Worthy</span> Apps <br />
                    For Every Screen
                </Typography>

                <Typography variant="body1" className={styles.subheadline}>
                    AppsWorthy specializes in building premium, high-performance mobile applications that users love. From concept to App Store, we deliver excellence.
                </Typography>

                <div className={styles.actions}>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        startIcon={<RocketLaunchIcon />}
                    >
                        Explore Our Apps
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        color="secondary"
                    >
                        Learn More
                    </Button>
                </div>

                <div className={styles.visual}>
                    <div className={styles.mockup}>
                        <img
                            src="/hero-ecosystem.png"
                            alt="AppsWorthy App Ecosystem"
                            className={styles.heroImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
