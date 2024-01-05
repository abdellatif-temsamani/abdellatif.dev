import { Akaya_Telivigala } from "next/font/google";
import Link from "next/link";

/**
 * akayaTelivigala font
 *
 */
const akayaTelivigala = Akaya_Telivigala({
    subsets: ["latin"],
    weight: ["400"],
});

/**
 * Footer component
 *
 * @returns {JSX.Element}
 */
export default function Footer(): JSX.Element {
    return (
        <footer
            className="flex flex-col gap-7 px-10 pt-16 pb-8 mt-32 md:px-32 bg-sky-200"
            id="waves"
        >
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <h1
                        className="text-4xl font-bold sm:text-6xl 2xl:text-7xl"
                        style={akayaTelivigala.style}
                    >
                        <span className="text-sky-400">A</span>bdellatif{" "}
                        <span className="text-sky-400">D</span>ev
                    </h1>
                    <p className="text-sm 2xl:text-xl">
                        <span className="font-extrabold">Empower</span> Your Digital Success
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-10 justify-between sm:flex-row sm:gap-0">
                <ul className="flex flex-col gap-2">
                    <li className="mb-3 font-bold">Quick info</li>
                    <li>
                        <b>Address:</b> Tangier, Morocco
                    </li>
                    <li>
                        <b>Email:</b> contact@abdellatif.dev
                    </li>
                    <li>
                        <b>Phone:</b> +212 6 17 36 16 10
                    </li>
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
            <svg
                className="w-full"
                height="3"
                viewBox="0 0 958 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>line</title>
                <line x1={0} y1={0} x2="100%" y2={0} stroke="#082F49" strokeWidth="4" />
            </svg>
            <div className="flex flex-col gap-10 justify-between xl:flex-row xl:gap-0">
                <p className="text-sm sm:text-base">
                    Copyright © 2023 Abdellatif.dev All Rights Reserved.
                </p>
                <ul className="flex flex-col gap-4 sm:flex-row">
                    <li>
                        <Link href="/copyright">Copyright Policy</Link>
                    </li>
                    <li>
                        <Link href="/terms">Terms Of Service</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
