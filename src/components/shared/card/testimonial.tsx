import Image from "next/image";
import Link from "next/link";
import { Key } from "react";

import Stars from "@/components/shared/rating/stars";
import { Testimonial } from "@/lib/testimonial";

/**
 * @type {TestimonialCardProps}
 *
 * @property key
 * @property testimonial
 */
type TestimonialCardProps = {
    key: Key;
    testimonial: Testimonial;
};

/**
 * TestimonialCard component
 *
 * @param {TestimonialCardProps}
 */
export default function TestimonialCard({
    key,
    testimonial,
}: Readonly<TestimonialCardProps>) {
    return (
        <div key={key} className="flex flex-col gap-6 p-8 md:gap-4">
            <Stars rating={testimonial.stars} key={testimonial.user.name} />
            <div>
                <svg
                    className="w-1/3"
                    height="4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>line</title>
                    <line
                        x1={0}
                        y1={0}
                        x2="100%"
                        y2={0}
                        stroke="#082F49"
                        strokeWidth="6"
                    />
                </svg>
            </div>

            <p className="font-bold">{testimonial.quote}</p>
            <div className="flex gap-6 md:items-center">
                <Link href={testimonial.user.company.linkedin} target="_blank">
                    <Image
                        className="w-full h-auto"
                        src={testimonial.user.company.logo}
                        alt={testimonial.user.company.name}
                        width={testimonial.user.company.imageSize}
                        height={testimonial.user.company.imageSize}
                    />
                </Link>
                <svg
                    className="hidden h-20 lg:block"
                    width="4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>line</title>
                    <line
                        x1={0}
                        y1={0}
                        x2={0}
                        y2="100%"
                        stroke="#082F49"
                        strokeWidth="6"
                    />
                </svg>

                <div className="flex flex-col gap-6 md:items-center lg:flex-row lg:gap-2">
                    <div className="flex flex-col gap-1 ml-2">
                        <Link href={testimonial.user.linkedin} target="_blank">
                            <p className="font-bold">{testimonial.user.name}</p>
                        </Link>
                        <p>
                            {testimonial.user.role},{" "}
                            {testimonial.user.company.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
