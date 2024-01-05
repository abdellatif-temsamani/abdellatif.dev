"use client";

import Button from "@/app/(components)/(shared)/(button)";
import { WithImage } from "@/app/(components)/(shared)/(section)/withImage";
import H1 from "@/app/(components)/(shared)/(title)/H1";

export default function InnovaTech() {
    return (
        <WithImage image="/images/books.svg" alt="Hero">
            <H1>Empowering Businesses with custom Software Solutions</H1>

            <p>
                At Abdellatif Dev, We specialize in create custom software solution that
                are tailored to your business needs, whether you need a web application
                or a mobile app, our commitment to your success is unwavering. We
                understand that no two businesses are alike. We will work closely with
                you to deliver a solution that meets your requirements and helps you
                achieve your goals.
            </p>
        </WithImage>
    );
}
