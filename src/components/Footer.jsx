import React from 'react';

const Footer = () => {
    return (
        <footer className="px-4 lg:px-40 py-20 border-t border-white/5 bg-background-dark/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-xl">bolt</span>
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-tight">TDTU</h2>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">
                        Dự án cho cuộc thi phần mềm IT-ZONE Team 3.
                    </p>
                    <div className="flex gap-4">
                        <a className="text-white/40 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
                        <a className="text-white/40 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
                        <a className="text-white/40 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">Cộng Đồng</h4>
                    <ul className="space-y-4">
                        <li><a className="text-white/40 hover:text-primary text-sm transition-colors" href="#">Page facebook</a></li>
                        <li><a className="text-white/40 hover:text-primary text-sm transition-colors" href="#">Github</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-5 -mb-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/20 text-xs">© 2026 IT-ZONE TEAM 3. All rights reserved.</p>
                <div className="flex gap-6">
                    <a className="text-white/20 hover:text-white text-xs" href="#">Điều khoản sử dụng</a>
                    <a className="text-white/20 hover:text-white text-xs" href="#">Chính sách bảo mật</a>
                    <a className="text-white/20 hover:text-white text-xs" href="#">Cookie dữ liệu</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
