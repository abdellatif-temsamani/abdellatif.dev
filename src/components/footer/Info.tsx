import Link from "next/link";

import { socials } from "@/lib/socials";

import SocialIcon from "../shared/socialIcon";

export default function Info() {
    return (
        <div className="flex flex-col gap-10 justify-between sm:flex-row sm:gap-0">
            <ul className="flex flex-col gap-2">
                <li className="mb-3 font-bold">Quick info</li>
                <li>
                    <b>Address:</b> Tangier, Morocco
                </li>
                <li>
                    <b>Email:</b>{" "}
                    <Link href="mailto:contact@abdellatif.dev">
                        contact@abdellatif.dev
                    </Link>
                </li>
                <li>
                    <b>Phone:</b>{" "}
                    <Link href="tel:+212617361610">+212 6 17 36 16 10</Link>
                </li>

                <div className="flex gap-4">
                    {socials.map((social) => {
                        return <SocialIcon social={social} />;
                    })}
                </div>
            </ul>

            <ul className="flex flex-col">
                <li className="mb-3 font-bold">Quick Links</li>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
}
