import HeroSvg from "@public/images/hero.svg";
import Link from "next/link";

import Button from "@/components/shared/button";
import { WithImage } from "@/components/shared/section/withImage";

/**
 * Hero component (home page)
 *
 * @returns {JSX.Element}
 */
export default function Hero(): JSX.Element {
    return (
        <WithImage image={HeroSvg} alt="Hero">
            <h1>Welcome To Abdellatif Dev - Empower Your Digital Success</h1>

            <div className="flex flex-col gap-8 lg:gap-4">
                <p>
                    At Abdellatif Dev, we are passionate about turning your
                    ideas into reality. Our experienced software developers are
                    dedicated to helping your business reach new heights with
                    innovative technology.
                </p>
                <div className="flex flex-col gap-6 sm:flex-row">
                    <Link href="/about">
                        <Button>Get Started</Button>
                    </Link>
                    <Link href="/contact">
                        <Button primary={false}>Contact Us</Button>
                    </Link>
                </div>
            </div>
        </WithImage>
    );
}
