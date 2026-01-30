import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark transition-colors duration-300 relative overflow-hidden">
            {/* Grid Texture Overlay */}
            <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-50"></div>

            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="w-full max-w-md p-8 relative z-10">
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Welcome Back
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">
                            Đăng nhập bằng tài khoản, mật khẩu của cổng thông tin sinh viên để tiếp tục.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                            >
                                MSSV
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                placeholder="Nhập MSSV"
                                required
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                                >
                                    Password
                                </label>
                                <a href="#" className="text-sm text-primary hover:text-secondary transition-colors">
                                    Forgot password?
                                </a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
