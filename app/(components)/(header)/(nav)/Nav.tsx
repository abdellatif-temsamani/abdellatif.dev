import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import { type NavLinkProp, navLinks } from "@/lib/routes";

import Styles from "./Nav.module.css";

/**
 * Nav component
 *
 * @returns {JSX.Element}
 */
export default function Nav(): JSX.Element {
    return (
        <>
            <input id="mobile-menu" type="checkbox" className="hidden peer" />
            <label
                htmlFor="mobile-menu"
                className="cursor-pointer md:hidden peer-checked:hidden"
            >
                <FaChevronDown size={32} />
            </label>
            <label
                htmlFor="mobile-menu"
                className="hidden cursor-pointer md:peer-checked:hidden peer-checked:block"
            >
                <FaChevronUp size={32} />
            </label>

            <nav className="nav-menu">
                {navLinks.map((navLink: NavLinkProp) => (
                    <Link key={navLink.title} className={Styles.link} href={navLink.href}>
                        {navLink.title}
                    </Link>
                ))}
            </nav>
        </>
    );
}
