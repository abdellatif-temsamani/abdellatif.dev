"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

/**
 * @type {withImageProps}
 *
 * @property image
 * @property alt
 * @property hideOnMobile
 * @property children
 */
type withImageProps = {
    image: string | StaticImport;
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
            className="flex flex-col gap-14 justify-between items-center md:gap-12 lg:flex-row"
        >
            <div className="flex flex-col gap-14 lg:gap-10 lg:w-1/2">
                {children}
            </div>

            <Image
                src={image}
                alt={alt}
                width={500}
                height={500}
                className={`${hideOnMobile ? "hidden" : ""} lg:block`}
            />
        </div>
    );
}
