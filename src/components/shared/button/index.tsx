import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(
    "py-2 px-8 font-black text-lg shadow-primary active:shadow-none " +
    " hover:shadow-none transition-500 w-full  " +
    " active:translate-y-1 active:scale-95 transition-all duration-300 " +
    " disabled:shadow-none disabled:bg-gray-100 disabled:text-gray-500", // base class
    {
        variants: {
            width: {
                fit: "md:w-fit",
                half: "md:w-1/2",
            },
            color: {
                primary: "bg-sky-400",
                secondary: "bg-sky-50",
                dark: "bg-sky-950 text-sky-400",
            },
            border: {
                "border-2": "border-2 border-sky-950",
                none: "border-none",
            },
        },
        defaultVariants: {
            width: "fit",
            color: "primary",
            border: "border-2",
        },
    },
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export default function Button({
    color: color,
    children,
    className,
    width,
    ...props
}: Readonly<ButtonProps>) {
    return (
        <button
            {...props}
            className={buttonStyles({ color: color, className, width })}
        >
            {children}
        </button>
    );
}
