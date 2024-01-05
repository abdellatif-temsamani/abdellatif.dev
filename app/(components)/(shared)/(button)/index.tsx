type ButtonProps = {
    text: string;
    onClick: () => void;
    type?: "button" | "submit" | "reset";
    primary?: boolean;
};

export default function Button({
    text,
    onClick,
    type = "button",
    primary = true,
}: Readonly<ButtonProps>) {
    return (
        <button
            className={`py-2 px-8 font-extrabold shadow-primary
                        active:shadow-none active:translate-y-1
                        active:scale-95 transition-all duration-300
                        border-2 border-sky-950
                        ${primary ? "bg-sky-400" : "bg-sky-50"} `}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
