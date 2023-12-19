import Link from "next/link";

import Styles from "./NavLink.module.css";

export type NavLinkProp = {
    title: string;
    href: string;
};

export default function NavLink({ title, href }: Readonly<NavLinkProp>) {
    return (
        <Link className={Styles.link} href={href}>
            {title}
        </Link>
    );
}
