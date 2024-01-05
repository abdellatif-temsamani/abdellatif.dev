import Image from "next/image";
import { Key } from "react";

import { Testimonial } from "@/lib/testimonial";

import Stars from "../(rating)/stars";

type TestimonialCardProps = {
    key: Key | null | undefined;
    testimonial: Testimonial;
};

export default function TestimonialCard({
    key,
    testimonial,
}: Readonly<TestimonialCardProps>) {
    return (
        <div key={key} className="flex flex-col gap-5 p-8">
            <Stars rating={testimonial.starts} />
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
            <div className="flex flex-col gap-5 justify-evenly items-center lg:flex-row">
                <div className="flex flex-col gap-6 lg:gap-2 items-center lg:flex-row">
                    <Image
                        className="rounded-2xl"
                        src={testimonial.user.avatar}
                        alt={testimonial.user.name}
                        width={80}
                        height={80}
                    />
                    <div className="flex flex-col gap-1 ml-2">
                        <p className="font-bold">{testimonial.user.name}</p>
                        <p>
                            {testimonial.user.role},{" "}
                            {testimonial.user.company.name}
                        </p>
                    </div>
                </div>
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

                <Image
                    src={testimonial.user.company.logo}
                    alt={testimonial.user.company.name}
                    width={80}
                    height={80}
                />
            </div>
        </div>
    );
}
