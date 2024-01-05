"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa6";

import NavLink, { type NavLinkProp } from "./NavLink";

const navLinks: NavLinkProp[] = [
    /**
     * NOTE: commented out links are not yet implemented
     */
    // { title: "About", href: "/about" },
    // { title: "Services", href: "/services" },
    // { title: "Contact", href: "/contact" },
    // { title: "Case Studies", href: "/case-studies" },
];

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <ul className="hidden gap-6 sm:flex">
                {navLinks.map((navLink: NavLinkProp) => (
                    <li key={navLink.title}>
                        <NavLink title={navLink.title} href={navLink.href} />
                    </li>
                ))}
            </ul>

            <button
                className={`fixed right-10 z-40 sm:hidden top-30
                            ${mobileMenuOpen ? "flex" : "hidden"}`}
                type="button"
                onClick={() => {
                    setMobileMenuOpen(false);
                }}
            >
                <FaChevronDown size={40} />
            </button>

            <ul
                className={`gap-6 sm:hidden
                            fixed top-0 left-0 bg-sky-200
                            w-full h-full p-20
                            flex-col justify-center items-start
                            ${mobileMenuOpen ? "flex" : "hidden"}`}
            >
                {navLinks.map((navLink: NavLinkProp) => (
                    <li key={navLink.title}>
                        <Link
                            className="font-bold font-2xl"
                            href={navLink.href}
                            onClick={() => {
                                setMobileMenuOpen(false);
                            }}
                        >
                            {navLink.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <button
                className="sm:hidden"
                type="button"
                onClick={() => {
                    setMobileMenuOpen(true);
                }}
            >
                <FaBars size={40} />
            </button>
        </>
    );
}
