import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300 min-h-screen relative">
            {/* Grid Texture Overlay */}
            <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>

            {/* Navigation */}
            <Navbar />

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
