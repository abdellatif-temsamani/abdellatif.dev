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
        link: "https://github.com/abdellatif-temsamani",
        icon: FaGithub,
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/abdellatif-m-399999225/",
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
