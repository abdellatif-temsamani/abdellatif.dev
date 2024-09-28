import AdLogo from "@public/images/ad_dark.svg";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/shared/button";

export default function CallToAction(): JSX.Element {
    return (
        <div className="relative bg-sky-400" id="waves">
            <div className="flex z-10 flex-col gap-8 py-14 px-8 md:py-28 md:px-16 bg-blur">
                <h1>Transform Your Business with Us</h1>
                <p className="text-xl text-sky-900">
                    At Abdellatif Dev, we offer top-notch software engineering
                    <br />
                    solutions to help businesses thrive in the digital age.
                </p>

                <div className="flex flex-col gap-6 w-full sm:flex-row md:w-auto">
                    <Link href="/about">
                        <Button color="dark" border="none">
                            About us
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button>Contact Us</Button>
                    </Link>
                </div>
            </div>
            <Image
                src={AdLogo}
                alt="logo"
                className="hidden absolute right-16 bottom-20 z-0 md:block"
            />
        </div>
    );
}
