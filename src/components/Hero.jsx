import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative px-4 lg:px-40 py-20 lg:py-32 overflow-hidden">
            <div className="hero-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] pointer-events-none"></div>
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative z-10">
                    <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-6">
                        Build <span className="text-gradient">The</span> Future.
                    </h1>
                    <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
                        Connecting students to global hackathons and AI-powered teammate matching. Join the elite network of student innovators and turn ideas into reality.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/login" className="bg-primary text-white px-8 py-4 rounded-xl text-base font-bold transition-all hover:shadow-[0_0_20px_rgba(127,19,236,0.4)]">
                            Get Started
                        </Link>
                    </div>
                </div>
                {/* Floating Cards Visual */}
                <div className="relative hidden lg:block">
                    <div className="relative w-full aspect-square">
                        {/* Main Image Background */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 rotate-3 translate-x-4">
                            <img
                                alt="Tech workspace with glowing displays"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6mdBxQYWGIcLyuM_3CtTA85w_hhh01Fu58Tzvx5vN-zRy9cxPgq3wyxbOc11t-DF9fB1VqwSHyTcPjNKWS-2zdQ1Rnwy8DP8HDObzN9S8X5Zejam2wcXCR0PKwrBqm_iZ4KPqJ_Yyhvup_1MONiBxBLGo2AfsYoRnHVT5G_tUVeccsD_Q8Va4SIIJV0dMgtj8sa3A3hmDXVhM4_ro60mkGA9ycRdh-bjKp8OohiRuUvr9elFtGxfsqriIBcrmJ_V6P3Q2jyd9fnw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                        </div>
                        {/* Floating Card 1: Winner */}
                        <div className="absolute -top-6 -left-6 glass-effect p-4 rounded-2xl shadow-2xl max-w-[240px] animate-bounce-slow">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="size-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                                    <span className="material-symbols-outlined">emoji_events</span>
                                </div>
                                <div>
                                    <p className="text-xs text-white/50 uppercase font-bold tracking-widest">Global AI Challenge</p>
                                    <p className="text-sm text-white font-bold">1st Place Winner</p>
                                </div>
                            </div>
                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-full"></div>
                            </div>
                        </div>
                        {/* Floating Card 2: Profile */}
                        <div className="absolute -bottom-10 right-4 glass-effect p-4 rounded-2xl shadow-2xl min-w-[200px]">
                            <div className="flex items-center gap-4">
                                <img
                                    alt="Student profile photo"
                                    className="size-12 rounded-full border-2 border-primary"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClarNm-nL_dz66Wiq97hOGeAbPq0-qLV1aqHZd1CI6ebsv_og1Cv8I6q0VNs-XHIQLd86ByxboqZSLamgcaXCnd9UlDUBO2Si757YYmAqqC_GEabSwh43iY0QfgNGuSpVrv09m3Yf4frSPacmf8kkxVA3jnkIhCnissjKTNhkwRV4BZJGeJV6xsG8l3NIYnMvzj3cgMgWRWh5WVcLjy2dT4Ej4YGuIvdCmsdZ7VOvb7v_w4FeENxdSCAKrgF_DaulBNLnkzqwjQ_8"
                                />
                                <div>
                                    <p className="text-white font-bold">Alex Chen</p>
                                    <p className="text-xs text-primary font-medium">Full Stack Dev</p>
                                </div>
                            </div>
                            <div className="mt-3 flex gap-1">
                                <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-white/60">React</span>
                                <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-white/60">Python</span>
                                <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-white/60">AI/ML</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
