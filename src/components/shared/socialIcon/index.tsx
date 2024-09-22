import Link from "next/link";

import { Social } from "@/lib/socials";

type SocialProps = {
    social: Social;
};

export default function SocialIcon({ social }: Readonly<SocialProps>) {
    return (
        <Link href={social.link} title={social.title} target="_blank">
            <social.icon className="w-6 h-6 cursor-pointer hover:scale-150 transition-500 hover:fill-sky-600" />
        </Link>
    );
}
