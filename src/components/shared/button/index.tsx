import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(
    "py-2 px-8 font-black text-lg shadow-primary active:shadow-none " +
        " active:translate-y-1 active:scale-95 transition-all duration-300 " +
        " border-2 border-sky-950 w-full " +
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
            },
        },
        defaultVariants: {
            width: "fit",
            color: "primary",
        },
    },
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export default function Button({
    color,
    children,
    className,
    width,
    ...props
}: Readonly<ButtonProps>) {
    return (
        <button
            {...props}
            className={buttonStyles({ color, className, width })}
        >
            {children}
        </button>
    );
}
