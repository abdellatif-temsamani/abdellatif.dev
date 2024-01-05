export type NavLinkProp = {
    title: string;
    href: string;
};

export const navLinks: NavLinkProp[] = [
    { title: "Contact", href: "/contact" },
    /**
     * NOTE: commented out links are not yet implemented
     */
    // { title: "About", href: "/about" },
    // { title: "Services", href: "/services" },
    // { title: "Case Studies", href: "/case-studies" },
];
