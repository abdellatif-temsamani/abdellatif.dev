/**
 * @type {H1Props}
 *
 */
type H1Props = {
    children: React.ReactNode;
    className?: string;
};

/**
 * @param {H1Props} { children, className }
 *
 */
export default function H1({ children, className }: Readonly<H1Props>) {
    return (
        <h1 className={`text-2xl font-extrabold sm:text-4xl ${className}`}>
            {children}
        </h1>
    );
}
