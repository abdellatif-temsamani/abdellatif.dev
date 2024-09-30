"use client";

import AdLogo from "@public/images/ad.svg";
import Image from "next/image";
import Link from "next/link";

import Nav from "./nav/Nav";

export default function Header(): JSX.Element {
    return (
        <header className="flex sticky top-0 z-30 justify-between items-center py-8 px-6 border-b-4 sm:items-end sm:px-16 bg-waves bg-sky-200">
            <Link href="/" className="after:hover:w-0">
                <Image src={AdLogo} alt="logo" width={67} height={67} />
            </Link>
            <Nav />
        </header>
    );
}
