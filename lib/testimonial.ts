/**
 * @type {Company}
 *
 * @property name - name of the company
 * @property logo - logo of the company
 * @property linkedin - linkedin page of the company
 */
type Company = {
    name: string;
    logo: `/images/clients/logos/${string}`;
    linkedin: `https://www.linkedin.com/company/${string}/`;
    imageSize: number;
};

/**
 * @type {Client}
 * responsible for the data of the clients section
 *
 * @property name - name of the client
 * @property avatar - avatar of the client
 * @property linkedin - linkedin page of the client
 * @property role - role of the client
 * @property company - company of the client
 */
type Client = {
    name: string;
    avatar: `/images/clients/avatars/${string}`| null;
    linkedin: `https://www.linkedin.com/in/${string}/`;
    role: string;
    company: Company;
};

/**
 * @type {Testimonial}
 * responsible for the data of the testimonials section
 *
 * @property stars - number of starts
 * @property quote - quote of the testimonial
 * @property user - user of the testimonial
 */
export type Testimonial = {
    stars: 0 | 1 | 2 | 3 | 4 | 5;
    quote: string;
    user: Client;
};

/**
 * TODO: add real testimonials
 *
 */
/**
 * List of testimonials
 *
 * @type {Testimonial[]}
 */
export const testimonials: Testimonial[] = [
    {
        stars: 4,
        quote: "Working with Abdellatif was a good experience. He is a software developer who consistently delivers high-quality code. Abdellatif is a reliable team player, always willing to lend a hand and share his expertise.",
        user: {
            name: "Noura TAKI",
            avatar: null,
            linkedin: "https://www.linkedin.com/in/noura-taki-46b6a1166/",
            role: "Project Manager",
            company: {
                name: "Hoolia Energy",
                logo: "/images/clients/logos/hoolia_energy.jpeg",
                linkedin: "https://www.linkedin.com/company/hoolia-energy/",
                imageSize: 80,
            },
        },
    },
];
