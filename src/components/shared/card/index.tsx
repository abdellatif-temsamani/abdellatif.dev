/* eslint-disable jsdoc/no-undefined-types */
import Link from "next/link";
import { FaCode } from "react-icons/fa6";

import { Feature } from "@/lib/features";

type CardProps = {
    cardInfo: Feature;
};

/**
 *
 * @param {CardProps} props props
 * @param {Feature} props.cardInfo card into
 * @returns {JSX.Element} Card
 */
export default function Card({ cardInfo }: Readonly<CardProps>): JSX.Element {
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
            </div>
        </Link>
    );
}
