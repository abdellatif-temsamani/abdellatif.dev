import NavLink, { type NavLinkProp } from "./NavLink";

const navLinks: NavLinkProp[] = [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
    { title: "Case Studies", href: "/case-studies" },
];

export default function Nav() {
    return (
        <nav className="flex gap-6">
            {navLinks.map((navLink: NavLinkProp) => (
                <NavLink
                    key={navLink.href}
                    title={navLink.title}
                    href={navLink.href}
                />
            ))}
        </nav>
    );
}
