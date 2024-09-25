import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { trustedClients } from "@/lib/clients";

/**
 * Trusted clients component (about page)
 * @returns {JSX.Element} Card
 */
export default function Trusted(): JSX.Element {
    return (
        <div className="flex flex-col gap-10 p-vertical">
            <h1 className="lg:w-1/2">
                Trusted by leading companies around the globe
            </h1>
            <div className="flex flex-wrap gap-16 w-full md:w-auto">
                {trustedClients.map((logo: StaticImageData) => (
                    <div
                        className="flex justify-center py-4 px-6 w-full border-2 hover:shadow-none transition-500 bg-sky-50 shadow-primary border-sky-950 md:w-fit"
                        key={logo.src}
                    >
                        <Image alt={logo.src} src={logo} />
                    </div>
                ))}
            </div>
        </div>
    );
}
