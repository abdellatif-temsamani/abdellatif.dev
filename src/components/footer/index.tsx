import CopyRight from "./CopyRight";
import Info from "./Info";
import Logo from "./Logo";

/**
 * Footer component
 *
 * @returns {JSX.Element}
 */
export default function Footer(): JSX.Element {
    return (
        <footer className="flex flex-col gap-7 px-10 pt-16 pb-8 md:px-32 bg-sky-200 bg-waves bg-cover">
            <Logo />
            <Info />

            <svg
                className="w-full"
                height="3"
                viewBox="0 0 958 2"
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
                    strokeWidth="4"
                />
            </svg>
            <CopyRight />
        </footer>
    );
}
