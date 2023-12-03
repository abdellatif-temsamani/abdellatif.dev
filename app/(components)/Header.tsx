"use client";
import Image from "next/image";
import Link from "next/link";

import icon from "@/public/images/icon.svg";

import Nav from "./(nav)/Nav";

export default function Header() {
    return (
        <header className="flex justify-between items-end py-8 px-16 text-end">
            <Link href="/" className="after:hover:w-0">
                <Image src={icon} alt="logo" width={67} height={67} />
            </Link>
            <Nav />
        </header>
    );
}
