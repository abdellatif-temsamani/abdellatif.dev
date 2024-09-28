import Link from "next/link";
import { useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import { type NavLinkProp, navLinks } from "@/lib/routes";

/**
 * Nav component
 *
 * @returns {JSX.Element}
 */
export default function Nav(): JSX.Element {
    // Reference to the hidden checkbox input
    const menuToggleRef = useRef<HTMLInputElement>(null);

    // Function to hide the menu by unchecking the checkbox
    const handleLinkClick = () => {
        if (menuToggleRef.current) {
            menuToggleRef.current.checked = false;
        }
    };

    return (
        <>
            <input
                id="mobile-menu"
                type="checkbox"
                className="hidden peer"
                ref={menuToggleRef}
            />
            <label
                htmlFor="mobile-menu"
                className="cursor-pointer md:hidden peer-checked:hidden"
            >
                <FaChevronDown size={32} />
            </label>
            <label
                htmlFor="mobile-menu"
                className="hidden cursor-pointer peer-checked:block md:peer-checked:hidden"
            >
                <FaChevronUp size={32} />
            </label>

            <div className="nav-menu">
                {navLinks.map((navLink: NavLinkProp) => (
                    <div key={navLink.href}>
                        <Link
                            className="link"
                            href={navLink.href}
                            onClick={handleLinkClick}
                        >
                            {navLink.title}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
