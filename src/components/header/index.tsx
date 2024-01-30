"use client";

import icon from "@public/images/icons/ad.svg";
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
        <header
            id="waves"
            className="flex sticky top-0 justify-between items-center py-8 px-6 border-b-4 sm:items-end sm:px-16 bg-sky-100 border-sky-950"
        >
            <Link href="/" className="after:hover:w-0">
                <Image src={icon} alt="logo" width={67} height={67} />
            </Link>
            <Nav />
        </header>
    );
}
