'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2563eb', // Modern Blue
            light: '#60a5fa',
            dark: '#1e40af',
        },
        secondary: {
            main: '#7c3aed', // Modern Violet
            light: '#a78bfa',
            dark: '#5b21b6',
        },
        background: {
            default: '#ffffff',
            paper: '#f8fafc',
        },
        text: {
            primary: '#0f172a',
            secondary: '#475569',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '3.5rem',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1.125rem',
            lineHeight: 1.6,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '10px 24px',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
                    },
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                },
            },
        },
    },
});

export default theme;
