import Link from "next/link";

import Button from "@/components/shared/button";

export default function Hero(): JSX.Element {
    return (
        <div className="flex flex-col gap-8 items-center p-vertical">
            <h1>Expert Software Solutions</h1>
            <p className="text-center md:w-1/3">
                We provide expert software engineering <br />
                solutions tailored to your business needs.
            </p>

            <div className="flex flex-col gap-6 w-full sm:flex-row md:w-auto">
                <Link href="/case-studies">
                    <Button>Case Studies</Button>
                </Link>
                <Link href="/contact">
                    <Button color="secondary">Contact Us</Button>
                </Link>
            </div>
        </div>
    );
}
