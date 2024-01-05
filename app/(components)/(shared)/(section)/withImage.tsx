"use client";
import Image from "next/image";

type withImageProps = {
    image: string;
    alt: string;
    children: React.ReactNode;
};

export function WithImage({ image, alt, children }: Readonly<withImageProps>) {
    return (
        <div
            id="hero"
            className="flex flex-col gap-14 items-center justify-between sm:flex-row sm:gap-12"
        >
            <div className="flex flex-col gap-14 sm:gap-10 sm:w-1/2">{children}</div>

            <Image src={image} alt={alt} width={500} height={500} />
        </div>
    );
}
