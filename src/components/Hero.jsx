import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative px-4 lg:px-40 py-20 lg:py-32 overflow-hidden">
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative z-10">
                    <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900 dark:text-white mb-6">
                        Team <span className="text-gradient">3</span>.
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-white/60 leading-relaxed mb-8 max-w-xl">
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
                        <div className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 rotate-3 translate-x-4 shadow-2xl dark:shadow-none">
                            <img
                                alt="Tech workspace with glowing displays"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6mdBxQYWGIcLyuM_3CtTA85w_hhh01Fu58Tzvx5vN-zRy9cxPgq3wyxbOc11t-DF9fB1VqwSHyTcPjNKWS-2zdQ1Rnwy8DP8HDObzN9S8X5Zejam2wcXCR0PKwrBqm_iZ4KPqJ_Yyhvup_1MONiBxBLGo2AfsYoRnHVT5G_tUVeccsD_Q8Va4SIIJV0dMgtj8sa3A3hmDXVhM4_ro60mkGA9ycRdh-bjKp8OohiRuUvr9elFtGxfsqriIBcrmJ_V6P3Q2jyd9fnw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-background-dark/80 dark:to-transparent"></div>
                        </div>


                        {/* Floating Card 1: Profile */}
                        <div className="absolute -bottom-10 right-4 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/10 p-4 rounded-2xl shadow-2xl min-w-[200px]">
                            <div className="flex items-center gap-4">
                                <img
                                    alt="Student profile photo"
                                    className="size-12 rounded-full border-2 border-primary"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClarNm-nL_dz66Wiq97hOGeAbPq0-qLV1aqHZd1CI6ebsv_og1Cv8I6q0VNs-XHIQLd86ByxboqZSLamgcaXCnd9UlDUBO2Si757YYmAqqC_GEabSwh43iY0QfgNGuSpVrv09m3Yf4frSPacmf8kkxVA3jnkIhCnissjKTNhkwRV4BZJGeJV6xsG8l3NIYnMvzj3cgMgWRWh5WVcLjy2dT4Ej4YGuIvdCmsdZ7VOvb7v_w4FeENxdSCAKrgF_DaulBNLnkzqwjQ_8"
                                />
                                <div>
                                    <p className="text-slate-900 dark:text-white font-bold">Trợ lí em Linh</p>
                                    <p className="text-xs text-primary font-medium">Sinh viên năm 2 khoa học máy tính</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
