import { Akaya_Telivigala } from "next/font/google";

/**
 * akayaTelivigala font
 *
 */
const akayaTelivigala = Akaya_Telivigala({
    subsets: ["latin"],
    weight: ["400"],
});

export default function Logo() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col">
                <h1
                    className="text-4xl font-bold sm:text-6xl 2xl:text-7xl"
                    style={akayaTelivigala.style}
                >
                    <span className="text-sky-400">A</span>bdellatif{" "}
                    <span className="text-sky-400">D</span>ev
                </h1>
                <p className="text-sm 2xl:text-xl">
                    <span className="font-extrabold">Empower</span> Your Digital Success
                </p>
            </div>
        </div>
    );
}
