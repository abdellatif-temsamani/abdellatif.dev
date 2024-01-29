"use client";

import Image from "next/image";
import Link from "next/link";

import icon from "@/public/images/icons/ad.svg";

import Nav from "./(nav)/Nav";

/**
 * Header component
 *
 * @returns {JSX.Element}
 */
export default function Header(): JSX.Element {
    return (
        <nav id="waves" className="flex bg-sky-100 border-sky-950 border-b-4 sticky top-0 justify-between items-center py-8 px-6 sm:items-end sm:px-16">
            <Link href="/" className="after:hover:w-0">
                <Image src={icon} alt="logo" width={67} height={67} />
            </Link>
            <Nav />
        </nav>
    );
}
