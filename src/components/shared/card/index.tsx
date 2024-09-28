import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { FaCode } from "react-icons/fa6";

import { Feature } from "@/lib/features";

const CardStyles = cva(
    "flex border-4 flex-col size-full flex-grow gap-4 justify-evenly py-4 px-8 " +
        "hover:shadow-none bg-sky-50 transition-500 shadow-card",
    {
        variants: {
            width: {
                fit: "md:w-fit",
                half: "md:w-1/2",
            },
            color: {
                primary: "bg-sky-400",
                secondary: "bg-sky-50",
            },
        },
        defaultVariants: {
            width: "fit",
            color: "primary",
        },
    },
);

type CardProps = VariantProps<typeof CardStyles> &
    ComponentProps<"div"> & { cardInfo: Feature };

export default function Card({
    className,
    cardInfo,
    ...props
}: Readonly<CardProps>) {
    return (
        <div {...props} className={CardStyles({ className })}>
            <FaCode className="w-8 h-8 sm:w-12 sm:h-12 fill-sky-900" />
            <h3 className="text-lg font-bold sm:text-xl text-sky-950">
                {cardInfo.title}
            </h3>
            <h3 className="text-sm font-normal sm:text-base text-sky-900">
                {cardInfo.description}
            </h3>
        </div>
    );
}
