import { IconType } from "react-icons";
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

export type Social = {
    title: string;
    link: `https://${string}`;
    icon: IconType;
};

export const socials: Social[] = [
    {
        title: "Github",
        link: "https://github.com/abdellatifdev-1/",
        icon: FaGithub,
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/company/abdellatif-dev",
        icon: FaLinkedin,
    },
    {
        title: "Twitter",
        link: "https://twitter.com/abdellatif_dev",
        icon: FaTwitter,
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/abdellatif.dev",
        icon: FaInstagram,
    },
    {
        title: "Facebook",
        link: "https://www.facebook.com/people/Abdellatif-Dev/100094429396389/",
        icon: FaFacebookF,
    },
];
