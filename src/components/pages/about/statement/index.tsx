import WebsiteSvg from "@public/images/website.svg";
import Link from "next/link";

import Button from "@/components/shared/button";
import { WithImage } from "@/components/shared/section/withImage";

/**
 * Statement component (home page)
 * our mission
 *
 * @returns {JSX.Element}
 */
export default function Statement(): JSX.Element {
    return (
        <WithImage image={WebsiteSvg} alt="Hero" hideOnMobile>
            <h1>Custom Software Solutions Empower Businesses</h1>

            <div className="flex flex-col gap-8 lg:gap-4">
                <p>
                    At Abdellatif Dev, we are a world-class software engineering
                    agency that specializes in delivering custom software
                    solutions for businesses of all sizes. With our skilled team
                    of developers, designers, and project managers, we are
                    dedicated to providing top-notch service and cutting-edge
                    technology.
                </p>
                <div className="flex flex-col gap-6 sm:flex-row">
                    <Link href="/services">
                        <Button>Services</Button>
                    </Link>
                    <Link href="/case-studies">
                        <Button primary={false}>Case Studies</Button>
                    </Link>
                </div>
            </div>
        </WithImage>
    );
}
