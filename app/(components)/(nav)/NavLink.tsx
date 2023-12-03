import Link from "next/link";

export type NavLinkProp = {
    title: string;
    href: string;
};

export default function NavLink({ title, href }: Readonly<NavLinkProp>) {
    return (
        <Link className="text-lg" href={href}>
            {title}
        </Link>
    );
}
