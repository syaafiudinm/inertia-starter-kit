import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-6">
                            <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-4xl font-light text-gray-900 mb-3 tracking-tight">
                        Laravel + React Starterkit
                    </h1>

                    <p className="text-gray-500 text-sm mb-8">by syaafiudinm</p>

                    <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                            <span>Laravel 12</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                            <span>React 18</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                            <span>Inertia.js</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
