import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(
    "py-2 px-8 font-black text-lg shadow-primary active:shadow-none " +
    " active:translate-y-1 active:scale-95 transition-all duration-300 " +
    " border-2 border-sky-950 w-full md:w-fit " +
    " disabled:shadow-none disabled:bg-gray-100 disabled:text-gray-500", // base class
    {
        variants: {
            color: {
                primary: "bg-sky-400",
                secondary: "bg-sky-50",
            },
        },
        defaultVariants: {
            color: "primary",
        },
    },
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export default function Button({
    color,
    children,
    ...props
}: Readonly<ButtonProps>) {
    return (
        <button {...props} className={buttonStyles({ color })}>
            {children}
        </button>
    );
}
