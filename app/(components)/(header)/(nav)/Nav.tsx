"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa6";

import { type NavLinkProp, navLinks } from "@/app/lib/routes";

import NavLink from "./NavLink";

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
                id="waves"
                className={`gap-6 sm:hidden
                            fixed top-0 left-0 bg-sky-200
                            w-full h-full p-20
                            flex-col justify-center items-start
                            ${mobileMenuOpen ? "flex" : "hidden"}`}
            >
                {navLinks.map((navLink: NavLinkProp) => (
                    <li key={navLink.title}>
                        <Link
                            className="text-3xl font-bold"
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
