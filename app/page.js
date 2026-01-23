import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import OurApps from '../components/OurApps';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <OurApps />
            <Benefits />
            <Contact />
            <Footer />
        </main>
    );
}
