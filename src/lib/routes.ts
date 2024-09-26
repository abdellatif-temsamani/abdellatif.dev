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
    { title: "About", href: "/about" },
    { title: "Contact us", href: "/contact" },
    { title: "Services", href: "/services" },
    { title: "Case Studies", href: "/case-studies" },
];
