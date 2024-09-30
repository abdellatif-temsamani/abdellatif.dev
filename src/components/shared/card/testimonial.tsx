import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

import Stars from "@/components/shared/rating/stars";
import { Testimonial } from "@/lib/testimonial";

const TestimonialCardStyles = cva(
    "flex flex-col gap-4 p-8 border-4 md:gap-4" +
    "hover:shadow-none transition-500 shadow-primary" +
    "bg-sky-50 border-sky-950",
);

type TestimonialCardProps = VariantProps<typeof TestimonialCardStyles> &
    ComponentProps<"div"> & { testimonial: Testimonial };

export default function TestimonialCard({
    testimonial,
    className,
    ...props
}: Readonly<TestimonialCardProps>) {
    return (
        <div {...props} className={TestimonialCardStyles({ className })}>
            <Stars rating={testimonial.stars} />
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
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <Link href={testimonial.user.company.linkedin} target="_blank">
                    <Image
                        className="w-32"
                        src={testimonial.user.company.logo}
                        alt={testimonial.user.company.name}
                    />
                </Link>
                <svg
                    className="block w-full h-1 lg:hidden"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>line</title>
                    <line
                        x1={0}
                        x2="100%"
                        y1={0}
                        y2={0}
                        stroke="#082F49"
                        strokeWidth="6"
                    />
                </svg>

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
