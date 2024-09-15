import Link from "next/link";
import { FaAnglesRight, FaCode } from "react-icons/fa6";

import { Feature } from "@/lib/features";

/**
 * @type {CardProps}
 *
 * @property  cardInfo
 */
type CardProps = {
    cardInfo: Feature;
};

/**
 * Card component
 *
 * @param {CardProps} { cardInfo }
 */
export default function Card({ cardInfo }: Readonly<CardProps>) {
    return (
        <Link href={cardInfo.link}>
            <div className="flex flex-col flex-grow gap-4 justify-evenly py-4 px-8 border-2 lg:w-96 hover:shadow-none bg-sky-50 transition-500 shadow-card">
                <FaCode className="w-8 h-8 sm:w-12 sm:h-12 fill-sky-900" />
                <h3 className="text-lg font-bold sm:text-xl text-sky-950">
                    {cardInfo.title}
                </h3>
                <h3 className="text-sm font-normal sm:text-base text-sky-900">
                    {cardInfo.description}
                </h3>
                <div className="flex justify-between font-light hover:underline text-sky-900">
                    Learn More
                    <FaAnglesRight className="fill-sky-900" />
                </div>
            </div>
        </Link>
    );
}
