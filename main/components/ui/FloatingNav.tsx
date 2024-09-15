"use client";
import React, { useEffect, useState } from "react";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    return (
        <>
            {/* Desktop nav */}

            <header className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#0a0a0a4f] backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Dinesh</h1>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            {navItems.map((navItem: any, idx: number) => (
                                <li key={`link=${idx}`}>
                                    <Link
                                        href={navItem.link}
                                        className="hover:text-blue-400 transition duration-300"
                                    >
                                        <span className="text-sm !cursor-pointer">{navItem.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <GiHamburgerMenu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile slide-in menu */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-64 bg-[rgba(0,0,0,0.4)] backdrop-blur-md z-[1000] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-4">
                    <button
                        className="text-white mb-4 focus:outline-none w-full flex justify-end items-center p-2"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <FaXmark size={24} />
                    </button>
                    <nav>
                        <ul className="space-y-4">
                            {navItems.map((navItem: any, idx: number) => (
                                <li key={`link=${idx}`}>
                                    <Link
                                        href={navItem.link}
                                        className="block text-lg hover:text-blue-400 transition duration-300"
                                        onClick={closeMenu}
                                    >
                                        <span className="text-lg font-bold !cursor-pointer">{navItem.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Overlay */}
            {
                isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={closeMenu}
                    ></div>
                )
            }




        </>
    );
};
