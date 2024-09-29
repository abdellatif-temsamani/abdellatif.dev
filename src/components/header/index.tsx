"use client";

import AdLogo from "@public/images/ad.svg";
import Image from "next/image";
import Link from "next/link";

import Nav from "./nav/Nav";

/**
 * Header component
 *
 * @returns {JSX.Element}
 */
export default function Header(): JSX.Element {
    return (
        <header className="flex z-50 sticky top-0 justify-between items-center py-8 px-6 bg-cover border-b-4 sm:items-end sm:px-16 bg-sky-200 bg-waves">
            <Link href="/" className="after:hover:w-0">
                <Image src={AdLogo} alt="logo" width={67} height={67} />
            </Link>
            <Nav />
        </header>
    );
}
