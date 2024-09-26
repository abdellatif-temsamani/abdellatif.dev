"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type withImageProps = {
    image: StaticImport;
    alt: string;
    hideOnMobile?: boolean;
    children: React.ReactNode;
};

/**
 * WithImage component
 *
 * @param {withImageProps} { image, alt, children, hideOnMobile }
 */
export function WithImage({
    image,
    alt,
    children,
    hideOnMobile,
}: Readonly<withImageProps>) {
    return (
        <div
            id="hero"
            className="flex flex-col gap-14 justify-between md:gap-12 lg:flex-row p-vertical"
        >
            <div className="flex flex-col gap-14 lg:gap-10 lg:w-1/2">
                {children}
            </div>

            <Image
                src={image}
                alt={alt}
                className={`${hideOnMobile ? "hidden" : ""} lg:block`}
            />
        </div>
    );
}
