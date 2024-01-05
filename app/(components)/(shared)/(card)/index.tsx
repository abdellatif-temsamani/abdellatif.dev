import Link from "next/link";
import { Key } from "react";
import { FaAnglesRight, FaCode } from "react-icons/fa6";

import { Feature } from "@/lib/features";

/**
 * @type {CardProps}
 *
 * @property key
 * @property  cardInfo
 */
type CardProps = {
    key: Key | null | undefined;
    cardInfo: Feature;
};

/**
 * Card component
 *
 * @param {CardProps} { key, cardInfo }
 */
export default function Card({ key, cardInfo }: Readonly<CardProps>) {
    return (
        <div
            className="flex flex-col flex-grow gap-4 justify-evenly py-4 px-8 border-2 transition-colors duration-500 lg:w-96 group shadow-card hover:bg-sky-900"
            key={key}
        >
            <FaCode className="w-8 h-8 sm:w-12 sm:h-12 fill-sky-900 group-hover:fill-sky-50" />
            <h3 className="text-lg font-bold sm:text-xl text-sky-950 group-hover:text-sky-50">
                {cardInfo.title}
            </h3>
            <h3 className="text-sm font-normal sm:text-base text-sky-900 group-hover:text-sky-200">
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
