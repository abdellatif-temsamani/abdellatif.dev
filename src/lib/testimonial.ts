import HooliaEnergyPng from "@public/images/clients/logos/hoolia_energy.png";
import { StaticImageData } from "next/image";

type Company = {
    name: string;
    logo: StaticImageData;
    linkedin: `https://www.linkedin.com/company/${string}/`;
};

type Client = {
    name: string;
    linkedin: `https://www.linkedin.com/in/${string}/`;
    role: string;
    company: Company;
};

export type Testimonial = {
    stars: 0 | 1 | 2 | 3 | 4 | 5;
    quote: string;
    user: Client;
};

/**
 * TODO: add more testimonials
 *
 */
export const testimonials: Testimonial[] = [
    {
        stars: 5,
        quote: "Working with Abdellatif was a good experience. He is a software developer who consistently delivers high-quality code. Abdellatif is a reliable team player, always willing to lend a hand and share his expertise.",
        user: {
            name: "Noura TAKI",
            linkedin: "https://www.linkedin.com/in/noura-taki-46b6a1166/",
            role: "Project Manager",
            company: {
                name: "Hoolia Energy",
                logo: HooliaEnergyPng,
                linkedin: "https://www.linkedin.com/company/hoolia-energy/",
            },
        },
    },
];
