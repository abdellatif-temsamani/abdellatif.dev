import Link from "next/link";
import { Key } from "react";

import { Social } from "@/lib/socials";

type SocialProps = {
    key: Key;
    social: Social;
};

export default function SocialIcon({ key, social }: Readonly<SocialProps>) {
    return (
        <Link href={social.link} key={key} title={social.title} target="_blank">
            <social.icon className="w-6 h-6 cursor-pointer text-sky-400" />
        </Link>
    );
}
