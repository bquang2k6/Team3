import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full px-4 lg:px-40 py-4">
            <div className="glass-effect rounded-xl px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-xl">bolt</span>
                    </div>
                    <h2 className="text-white text-xl font-bold tracking-tight">TDTU</h2>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a className="text-white/70 hover:text-primary text-sm font-medium transition-colors" href="#">Tìm kiếm phòng học</a>
                    <a className="text-white/70 hover:text-primary text-sm font-medium transition-colors" href="#">Find Team</a>
                    <a className="text-white/70 hover:text-primary text-sm font-medium transition-colors" href="#">Projects</a>
                    <a className="text-white/70 hover:text-primary text-sm font-medium transition-colors" href="#">Mentors</a>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/login" className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105">
                        Sign Up
                    </Link>
                    <div className="size-10 rounded-full border border-white/10 overflow-hidden">
                        <img
                            alt="User avatar placeholder"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDio-LSFjDCNkAEARepkcmo_gjp0z0vU2f7tpQZ-118cJSXgEgmKUMkp7tGw1G_GC9mUgDQ80aRx_sJpxIZdx5y9eGhwSx2e14YQKbd08BBZubIEmsdwC9u0VWCHCzabu_S0ByD6ywNQjXOw7L4PGvnJjo8TfngOXHT-Rjlub0rbrnb6Gl30dQ7IrH4yJriag2_tc99q2fdZ9eQKkdRzKRlZLdfJ-KCNOkpH8Awty6poHQicdRMWAABstrCWBVXD5epFSZ7iN0KmBM"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
