type H1Props = {
    text: string;
    className?: string;
};

export default function H1({ text, className }: Readonly<H1Props>) {
    return (
        <h1 className={`text-xl font-extrabold sm:text-3xl ${className}`}>
            {text}
        </h1>
    );
}
