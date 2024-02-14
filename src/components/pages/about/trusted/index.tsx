import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import { trustedClients } from "@/lib/clients";

/**
 * Trusted clients component (about page)
 *
 * @returns {JSX.Element}
 */
export default function Trusted(): JSX.Element {
    return (
        <div className="flex flex-col gap-10">
            <h1 className="lg:w-1/2">
                Trusted by leading companies around the globe
            </h1>
            <div className="flex flex-wrap gap-16 w-full md:w-auto">
                {trustedClients.map((logo: StaticImageData) => (
                    <Image alt={logo.src} key={logo.src} src={logo} />
                ))}
            </div>
        </div>
    );
}
