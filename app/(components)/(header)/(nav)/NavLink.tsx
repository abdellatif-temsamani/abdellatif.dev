import Link from "next/link";

import { NavLinkProp } from "@/lib/routes";

import Styles from "./NavLink.module.css";

/**
 * NavLink component
 *
 * @param {NavLinkProp} {title, href}
 * @returns {JSX.Element}
 */
export default function NavLink({
    title,
    href,
}: Readonly<NavLinkProp>): JSX.Element {
    return (
        <Link className={Styles.link} href={href}>
            {title}
        </Link>
    );
}
