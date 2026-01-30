import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isExpanded, onToggle }) => {
    const [isDark, setIsDark] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme === 'dark';
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return true; // Default to dark if SSR (though this is SPA) or no preference
    });

    React.useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <nav className={`fixed right-0 top-0 h-screen py-8 z-50 flex flex-col items-center justify-between border-l border-slate-200 dark:border-white/10 glass-effect bg-white/80 dark:bg-white/5 backdrop-blur-md transition-all duration-300 ${isExpanded ? 'w-64' : 'w-0 md:w-20'} overflow-visible`}>
            {/* Toggle Button */}
            <button
                onClick={onToggle}
                className={`absolute top-8 left-0 -translate-x-1/2 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 p-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:scale-110 transition-transform z-50 ${!isExpanded ? 'md:flex' : ''}`}
            >
                <span className="material-symbols-outlined text-sm">
                    {isExpanded ? 'chevron_right' : 'chevron_left'}
                </span>
            </button>

            {/* Content Wrapper */}
            <div className={`flex flex-col items-center justify-between w-full h-full overflow-hidden ${!isExpanded ? 'opacity-0 md:opacity-100 md:w-20' : 'opacity-100 w-64'} transition-opacity duration-200`}>
                {/* Logo */}
                <div className="flex flex-col items-center gap-2 w-full px-4">
                    <div className="flex items-center gap-3 w-full justify-center">
                        <div className=" items-center justify-center">
                            <img
                                src="/avt.jpg"
                                alt="bolt icon"
                                className="w-9 h-9 rounded-full object-cover"
                            />
                        </div>
                        {/* Logo Text */}
                        {isExpanded && (
                            <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight whitespace-nowrap overflow-hidden animate-fade-in">
                                ITZone
                            </h2>
                        )}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-2 w-full px-4">
                    <NavIcon icon="manage_search" label="Hackathons" isExpanded={isExpanded} />
                    <NavIcon icon="group_add" label="Find Team" isExpanded={isExpanded} />
                    <NavIcon icon="rocket_launch" label="Projects" isExpanded={isExpanded} />
                    <NavIcon icon="school" label="Mentors" isExpanded={isExpanded} />
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-col items-center gap-6 w-full px-4">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-xl hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300 flex items-center gap-3 ${isExpanded ? 'w-full justify-start px-4' : ''}`}
                        title="Toggle Theme"
                    >
                        <span className="material-symbols-outlined max-w-[240] shrink-0">
                            {isDark ? 'light_mode' : 'dark_mode'}
                        </span>
                        {isExpanded && <span className="font-medium whitespace-nowrap overflow-hidden animate-fade-in">Theme</span>}
                    </button>

                    <div className={`rounded-full border border-white/10 overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all shrink-0 ${isExpanded ? 'size-12' : 'size-10'}`}>
                        <img
                            alt="User avatar"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDio-LSFjDCNkAEARepkcmo_gjp0z0vU2f7tpQZ-118cJSXgEgmKUMkp7tGw1G_GC9mUgDQ80aRx_sJpxIZdx5y9eGhwSx2e14YQKbd08BBZubIEmsdwC9u0VWCHCzabu_S0ByD6ywNQjXOw7L4PGvnJjo8TfngOXHT-Rjlub0rbrnb6Gl30dQ7IrH4yJriag2_tc99q2fdZ9eQKkdRzKRlZLdfJ-KCNOkpH8Awty6poHQicdRMWAABstrCWBVXD5epFSZ7iN0KmBM"
                        />
                    </div>

                    <Link
                        to="/login"
                        className={`bg-primary hover:bg-primary/90 text-white rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/20 flex items-center justify-center ${isExpanded ? 'w-full py-3 gap-2' : 'p-2'}`}
                    >
                        <span className="material-symbols-outlined shrink-0">login</span>
                        {isExpanded && <span className="font-bold whitespace-nowrap overflow-hidden animate-fade-in">Sign In</span>}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

const NavIcon = ({ icon, label, isExpanded }) => (
    <a
        href="#"
        className={`group relative flex items-center rounded-xl hover:bg-white/10 transition-colors ${isExpanded ? 'w-full px-4 py-3 gap-3 justify-start' : 'justify-center w-10 h-10 mx-auto'}`}
    >
        <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors shrink-0">
            {icon}
        </span>
        {isExpanded ? (
            <span className="text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap overflow-hidden animate-fade-in">
                {label}
            </span>
        ) : (
            /* Tooltip for collapsed state */
            <span className="absolute right-full mr-4 px-2 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
                {label}
            </span>
        )}
    </a>
);

export default Navbar;
