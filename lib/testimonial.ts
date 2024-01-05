type Company = {
    name: string;
    logo: `/images/clients/logos/${string}`;
    linkedin: `https://www.linkedin.com/company/${string}/`;
};
type Client = {
    name: string;
    avatar: `/images/clients/avatars/${string}`;
    linkedin: `https://www.linkedin.com/in/${string}/`;
    role: string;
    company: Company;
};

export type Testimonial = {
    starts: 0 | 1 | 2 | 3 | 4 | 5;
    quote: string;
    user: Client;
};

/**
 * TODO: add real testimonials
 *
 */
export const testimonials: Testimonial[] = [
    {
        starts: 5,
        quote: "Our Experience with Abdellatif Dev has been exceptional. Their team is highly skilled and delivers top-notch solutions.",
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
        starts: 4,
        quote: "Our Experience with Abdellatif Dev has been exceptional. Their team is highly skilled and delivers top-notch solutions.",
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
        starts: 3,
        quote: "Our Experience with Abdellatif Dev has been exceptional. Their team is highly skilled and delivers top-notch solutions.",
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
        starts: 4,
        quote: "Our Experience with Abdellatif Dev has been exceptional. Their team is highly skilled and delivers top-notch solutions.",
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
