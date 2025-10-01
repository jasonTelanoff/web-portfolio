import Link from "next/link";
import { useState } from "react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about_me" },
    { name: "Projects", href: "/projects" },
    { name: "Course Work", href: "/courses" },
    { name: "Connect", href: "/connect" },
];

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("");

    return (
        <nav className="relative">
            <div className="absolute inset-0 bg-white/10 dark:bg-slate-800/10 backdrop-blur-md rounded-2xl border border-white/20 dark:border-slate-700/20" />
            <ul className="relative flex items-center justify-center gap-1 p-2">
                {navigation.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={`group relative px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-500/50 ${activeLink === item.href
                                    ? 'text-accent-600 dark:text-accent-400 bg-white/20 dark:bg-slate-700/20 shadow-soft'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-white/10 dark:hover:bg-slate-700/10'
                                }`}
                            onMouseEnter={() => setActiveLink(item.href)}
                            onMouseLeave={() => setActiveLink("")}
                        >
                            <span className="relative z-10">{item.name}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
