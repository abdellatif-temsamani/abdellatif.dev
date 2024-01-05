/**
 * @type NavLinkProp
 * @property title - the title of the link
 * @property href - the href of the link
 */
export type NavLinkProp = {
    title: string;
    href: string;
};

/**
 * List of navigation links
 *
 * @type {NavLinkProp[]}
 */
export const navLinks: NavLinkProp[] = [
    /**
     * NOTE: commented out links are not yet implemented
     */
    { title: "Home", href: "/" },
    { title: "Contact", href: "/contact" },
    { title: "About", href: "/about" },
    // { title: "Services", href: "/services" },
    // { title: "Case Studies", href: "/case-studies" },
];
