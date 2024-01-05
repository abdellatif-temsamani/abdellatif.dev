import Link from "next/link";

import { NavLinkProp } from "@/lib/routes";

import Styles from "./NavLink.module.css";

export default function NavLink({ title, href }: Readonly<NavLinkProp>) {
    return (
        <Link className={Styles.link} href={href}>
            {title}
        </Link>
    );
}
