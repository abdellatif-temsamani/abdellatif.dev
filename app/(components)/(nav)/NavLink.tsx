import Link from "next/link";
import { Key } from "react";

export type NavLinkProp = {
    key?: Key;
    title: string;
    href: string;
};

export default function NavLink({ key, title, href }: NavLinkProp) {
    return (
        <Link className="text-lg" href={href} key={key}>
            {title}
        </Link>
    );
}
