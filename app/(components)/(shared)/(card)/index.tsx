import Link from "next/link";
import { Key } from "react";
import { FaAnglesRight } from "react-icons/fa6";

import { Feature } from "@/app/lib/features";

type CardProps = {
    key: Key | null | undefined;
    cardInfo: Feature;
};

export default function Card({ key, cardInfo }: Readonly<CardProps>) {
    return (
        <div
            className="flex flex-col gap-4 justify-evenly p-4 border-2 transition-colors duration-500 sm:w-96 group shadow-card hover:bg-sky-900"
            key={key}
        >
            <h3 className="text-xl font-bold text-sky-950 group-hover:text-sky-50">
                {cardInfo.title}
            </h3>
            <h3 className="text-base font-normal text-sky-900 group-hover:text-sky-200">
                {cardInfo.description}
            </h3>
            <Link
                href={cardInfo.link}
                className="flex justify-between font-light hover:underline text-sky-900 group-hover:text-sky-50"
            >
                Learn More
                <FaAnglesRight className="fill-sky-900 group-hover:fill-sky-50" />
            </Link>
        </div>
    );
}
