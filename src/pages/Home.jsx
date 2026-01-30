import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home = () => {
    const [isNavExpanded, setIsNavExpanded] = React.useState(false);

    return (
        <div className={`font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-all duration-300 min-h-screen relative ${isNavExpanded ? 'md:pr-64' : 'md:pr-20'} pr-0`}>
            {/* Grid Texture Overlay */}
            <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>

            {/* Navigation */}
            <Navbar isExpanded={isNavExpanded} onToggle={() => setIsNavExpanded(!isNavExpanded)} />

            {/* Main Content */}
            <main>
                <Hero />
                <Features />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
