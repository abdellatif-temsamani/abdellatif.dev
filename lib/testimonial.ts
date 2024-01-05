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
    avatar: `/images/clients/avatars/${string}`;
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
        stars: 5,
        quote:
            "Our Experience with Abdellatif Dev has been exceptional. Their team is highly skilled and delivers top-notch solutions.",
        user: {
            name: "Abdellatif M. Temsamani",
            avatar: "/images/clients/avatars/abdellatif_temsamani.jpg",
            linkedin: "https://www.linkedin.com/in/abdellatif-m-399999225/",
            role: "CEO",
            company: {
                name: "Abdellatif Dev",
                logo: "/images/clients/logos/abdellatif_dev.jpeg",
                linkedin: "https://www.linkedin.com/company/abdellatif-dev/",
            },
        },
    },
    {
        stars: 4,
        quote:
            "Our Experience with Abdellatif Dev has been exceptional. Their team is highly skilled and delivers top-notch solutions.",
        user: {
            name: "Abdellatif M. Temsamani",
            avatar: "/images/clients/avatars/abdellatif_temsamani.jpg",
            linkedin: "https://www.linkedin.com/in/abdellatif-m-399999225/",
            role: "Software Engineer",
            company: {
                name: "Abdellatif Dev",
                logo: "/images/clients/logos/abdellatif_dev.jpeg",
                linkedin: "https://www.linkedin.com/company/abdellatif-dev/",
            },
        },
    },
    {
        stars: 3,
        quote:
            "Our Experience with Abdellatif Dev has been exceptional. Their team is highly skilled and delivers top-notch solutions.",
        user: {
            name: "Abdellatif M. Temsamani",
            avatar: "/images/clients/avatars/abdellatif_temsamani.jpg",
            linkedin: "https://www.linkedin.com/in/abdellatif-m-399999225/",
            role: "co-founder",
            company: {
                name: "Abdellatif Dev",
                logo: "/images/clients/logos/abdellatif_dev.jpeg",
                linkedin: "https://www.linkedin.com/company/abdellatif-dev/",
            },
        },
    },
    {
        stars: 4,
        quote:
            "Our Experience with Abdellatif Dev has been exceptional. Their team is highly skilled and delivers top-notch solutions.",
        user: {
            name: "Abdellatif M. Temsamani",
            avatar: "/images/clients/avatars/abdellatif_temsamani.jpg",
            linkedin: "https://www.linkedin.com/in/abdellatif-m-399999225/",
            role: "QA Engineer",
            company: {
                name: "Abdellatif Dev",
                logo: "/images/clients/logos/abdellatif_dev.jpeg",
                linkedin: "https://www.linkedin.com/company/abdellatif-dev/",
            },
        },
    },
];
