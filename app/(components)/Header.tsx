"use client";
import Image from "next/image";

import icon from "@/public/images/icon.svg";

import Nav from "./(nav)/Nav";

export default function Header() {
    return (
        <header className="flex justify-between p-4 items-end text-end px-16">
            <Image src={icon} alt="logo" width={67} height={67} />
            <Nav />
        </header>
    );
}
