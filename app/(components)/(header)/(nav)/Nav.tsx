import NavLink, { type NavLinkProp } from "./NavLink";

const navLinks: NavLinkProp[] = [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
    { title: "Case Studies", href: "/case-studies" },
];

export default function Nav() {
    return (
        <ul className="flex gap-6">
            {navLinks.map((navLink: NavLinkProp) => (
                <li key={navLink.title}>
                    <NavLink title={navLink.title} href={navLink.href} />
                </li>
            ))}
        </ul>
    );
}
