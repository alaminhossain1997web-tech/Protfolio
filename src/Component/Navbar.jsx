import { useState } from "react";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Link } from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];
    return (
        <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">

            <div className="container mx-auto max-w-7xl px-4">
                <div className="flex items-center justify-between py-5">

                    {/* Logo */}
                    <a
                        href="/"
                        className="text-2xl font-bold tracking-tight text-slate-900"
                    >
                        Al-Amin
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden items-center gap-8 md:flex">
                        <ul className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
                            <Link
                                to="https://github.com/alaminhossain1997web-tech"
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 transition hover:text-slate-900"
                            >
                                <FaGithub size={20} />
                            </Link>

                            <Link
                                to="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 transition hover:text-blue-600"
                            >
                                <FaLinkedinIn size={18} />
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Toggle Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                    >
                        {isOpen ? (
                            <HiXMark size={28} />
                        ) : (
                            <HiBars3 size={28} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <nav className="border-t border-slate-200 py-4 md:hidden">
                        <ul className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-slate-600 hover:text-blue-600"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn size={18} />
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Navbar
