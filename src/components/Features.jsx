import React from 'react';

const Features = () => {
    return (
        <section className="px-4 lg:px-40 py-24 relative">
            <div className="mb-16">
                <h2 className="text-white text-3xl lg:text-5xl font-black mb-4 tracking-tight">Everything you need to win</h2>
                <p className="text-white/50 text-lg max-w-2xl">Our futuristic platform provides the tools for student developers to excel from concept to code.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Feature 1 */}
                <div className="glass-effect group p-6 rounded-2xl transition-all hover:bg-primary/10 hover:border-primary/30">
                    <div className="size-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">explore</span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">Discover Events</h3>
                    <p className="text-white/50 text-sm leading-relaxed">Browse and join global hackathons seamlessly with one-click registration.</p>
                </div>
                {/* Feature 2 */}
                <div className="glass-effect group p-6 rounded-2xl transition-all hover:bg-primary/10 hover:border-primary/30">
                    <div className="size-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">groups_3</span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">Dream Teams</h3>
                    <p className="text-white/50 text-sm leading-relaxed">AI-powered teammate matching based on complementary skill sets.</p>
                </div>
                {/* Feature 3 */}
                <div className="glass-effect group p-6 rounded-2xl transition-all hover:bg-primary/10 hover:border-primary/30">
                    <div className="size-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">auto_awesome_motion</span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">Winning Archives</h3>
                    <p className="text-white/50 text-sm leading-relaxed">Showcase your builds and explore winning projects from around the world.</p>
                </div>
                {/* Feature 4 */}
                <div className="glass-effect group p-6 rounded-2xl transition-all hover:bg-primary/10 hover:border-primary/30">
                    <div className="size-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">psychology</span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">Mentor Matching</h3>
                    <p className="text-white/50 text-sm leading-relaxed">Get industry expert guidance for your build from senior engineers.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
