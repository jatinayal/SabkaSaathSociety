"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-4">
                        {/* Logo */}
                        <div className="relative w-16 h-16 shrink-0">
                            <Image
                                src="/image.png"
                                alt="Sabka Saath Society Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Organization Name */}
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold text-[#2C5282] tracking-tight leading-none">
                                SABKA SAATH SOCIETY
                            </h1>
                            <span className="text-xs font-medium text-gray-600 tracking-wider mt-1 uppercase">
                                Government Registered NGO | Est. 2010
                            </span>
                        </div>
                    </div>

                    {/* Right Side Utility - Desktop */}
                    <div className="hidden md:block text-right">
                        <p className="text-xs text-gray-500 mb-1 font-medium">An Initiative for Sustainable Development</p>
                        <div className="flex items-center justify-end gap-2">
                            <div className="h-1.5 w-8 bg-[#276749] rounded-full"></div>
                            <div className="h-1.5 w-16 bg-[#319795] rounded-full"></div>
                            <div className="h-1.5 w-4 bg-[#2C5282] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [textSize, setTextSize] = useState<"small" | "normal" | "large">("normal");
    const pathname = usePathname();

    useEffect(() => {
        // Apply text size to root element
        const root = document.documentElement;
        const sizes = {
            small: "14px",
            normal: "16px",
            large: "18px",
        };
        root.style.fontSize = sizes[textSize];
    }, [textSize]);

    const navLinks = [
        { name: "Home", href: "/", description: "" },
        { name: "About Us", href: "/about", description: "Mission, Vision & Team" },
        { name: "Programs", href: "/programs", description: "Our Key Initiatives" },
        { name: "What We Do", href: "/what-we-do", description: "Areas of Intervention" },
        { name: "Impact", href: "/impact", description: "Impact & Achievements" },
        { name: "CSR", href: "/csr", description: "CSR & Government Schemes" },
        { name: "Support", href: "/support", description: "Startup & Social Enterprise Support" },
        { name: "Partners", href: "/partners", description: "Partners & Collaborations" },
        { name: "Resources", href: "/resources", description: "Reports & Publications" },
        { name: "Contact Us", href: "/contact", description: "Get in Touch" },
    ];

    return (
        <nav className="bg-[#2C5282] shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-14 items-center">

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:bg-[#2A4365] px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <span className="font-semibold uppercase text-sm tracking-wide">
                                {isOpen ? "Close" : "Menu"}
                            </span>
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex flex-1 items-center space-x-6 ms-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            const isHome = link.href === "/";

                            return (
                                <div key={link.name} className="relative group">
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "relative py-2 text-sm font-medium transition-colors whitespace-nowrap block",
                                            isActive
                                                ? "text-white"
                                                : "text-blue-100 hover:text-white"
                                        )}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#319795] rounded-full"></span>
                                        )}
                                    </Link>

                                    {/* Link Description Tooltip */}
                                    {!isHome && link.description && (
                                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max max-w-[200px] bg-white text-gray-700 text-xs px-3 py-1.5 rounded-sm border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-center pointer-events-none">
                                            {link.description}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Accessibility Controls - Right Aligned */}
                    <div className="flex items-center gap-3 pl-4 border-l border-blue-400/30 ml-auto">
                        <span className="text-[10px] uppercase text-blue-100 tracking-wider hidden sm:inline-block font-semibold">Text Size</span>
                        <div className="flex bg-[#1A365D] rounded border border-blue-400/30 overflow-hidden shadow-sm">
                            <button
                                onClick={() => setTextSize("small")}
                                className={`px-3 py-1 text-xs font-bold hover:bg-[#2C5282] transition-colors ${textSize === 'small' ? 'bg-white text-[#2C5282] hover:text-white ' : 'text-white'}`}
                                title="Decrease font size"
                                aria-label="Decrease text size"
                            >
                                A-
                            </button>
                            <button
                                onClick={() => setTextSize("normal")}
                                className={`px-3 py-1 text-xs font-bold hover:bg-[#2C5282] transition-colors border-l border-blue-400/30 ${textSize === 'normal' ? 'bg-white text-[#2C5282] hover:text-white' : 'text-white'}`}
                                title="Reset font size"
                                aria-label="Reset text size"
                            >
                                A
                            </button>
                            <button
                                onClick={() => setTextSize("large")}
                                className={`px-3 py-1 text-xs font-bold hover:bg-[#2C5282] transition-colors border-l border-blue-400/30 ${textSize === 'large' ? 'bg-white text-[#2C5282] hover:text-white' : 'text-white'}`}
                                title="Increase font size"
                                aria-label="Increase text size"
                            >
                                A+
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#2A4365] border-t border-blue-400/30">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "block px-3 py-2 text-base font-medium rounded transition-colors",
                                        isActive ? "text-white bg-[#1A365D]" : "text-blue-100 hover:bg-[#1A365D] hover:text-white"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
}
