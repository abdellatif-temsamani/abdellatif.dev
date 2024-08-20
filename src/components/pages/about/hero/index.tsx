import Link from "next/link";

import Button from "@/components/shared/button";

/**
 * Hero component (about page)
 *
 * @returns {JSX.Element}
 */
export default function Hero(): JSX.Element {
    return (
        <div className="flex flex-col gap-8 items-center">
            <h1>Your Trusted Partner</h1>
            <p className="md:w-1/2">
                Abdellatif Dev is a freelance software engineer agency that you
                can rely on for all your engineering needs.
            </p>

            <div className="flex flex-col gap-6 w-full sm:flex-row md:w-auto">
                <Link href="/services">
                    <Button>Services</Button>
                </Link>
                <Link href="/contact">
                    <Button color="secondary">Contact Us</Button>
                </Link>
            </div>
        </div>
    );
}
