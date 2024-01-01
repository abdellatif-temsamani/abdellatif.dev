"use client";
import Image from "next/image";

import Button from "@/app/(components)/(shared)/(button)";
import H1 from "@/app/(components)/(shared)/(title)/H1";

export function Hero() {
    return (
        <div
            id="hero"
            className="flex flex-col gap-14 justify-between sm:flex-row sm:gap-12"
        >
            <div className="flex flex-col gap-14 sm:gap-10 sm:w-1/2">
                <H1 text="Welcome To Abdellatif Dev - Empower Your Digital Success" />

                <div className="flex flex-col gap-8 sm:gap-4">
                    <p>
                        At Abdellatif Dev, we are passionate about turning your
                        ideas into reality. Our experienced software developers
                        are dedicated to helping your business reach new heights
                        with innovative technology.
                    </p>
                    <div className="flex flex-col gap-6 sm:flex-row">
                        <Button text="Get Started" onClick={() => {}} />
                        <Button
                            text="Contact Us"
                            onClick={() => {}}
                            primary={false}
                        />
                    </div>
                </div>
            </div>

            <Image src="/images/hero.svg" alt="Hero" width={500} height={500} />
        </div>
    );
}
