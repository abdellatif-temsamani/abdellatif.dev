"use client";

import Button from "@/app/(components)/(shared)/(button)";
import { WithImage } from "@/app/(components)/(shared)/(section)/withImage";

/**
 * Hero component (home page)
 *
 * @returns {JSX.Element}
 */
export default function Hero(): JSX.Element {
    return (
        <WithImage image="/images/hero.svg" alt="Hero">
            <h1>Welcome To Abdellatif Dev - Empower Your Digital Success</h1>

            <div className="flex flex-col gap-8 lg:gap-4">
                <p>
                    At Abdellatif Dev, we are passionate about turning your ideas into
                    reality. Our experienced software developers are dedicated to helping
                    your business reach new heights with innovative technology.
                </p>
                <div className="flex flex-col gap-6 sm:flex-row">
                    <Button text="Get Started" onClick={() => { }} />
                    <Button text="Contact Us" onClick={() => { }} primary={false} />
                </div>
            </div>
        </WithImage>
    );
}
