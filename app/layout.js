import ThemeRegistry from '../theme/ThemeRegistry';
import './globals.css';

export const metadata = {
    title: 'AppsWorthy | Building Premium Mobile Experiences',
    description: 'AppsWorthy builds and publishes high-quality mobile apps for iOS and Android. Experience modern design and high performance.',
    openGraph: {
        title: 'AppsWorthy',
        description: 'High-quality mobile apps for App Store and Play Store.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    );
}
