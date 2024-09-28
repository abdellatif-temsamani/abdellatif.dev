import BooksSvg from "@public/images/books.svg";

import { WithImage } from "@/components/shared/section/withImage";

/**
 * InnovaTech component (home page)
 *
 * @returns {JSX.Element}
 */
export default function InnovaTech(): JSX.Element {
    return (
        <WithImage image={BooksSvg} alt="Hero" hideOnMobile>
            <h1>Empowering Businesses with custom Software Solutions</h1>

            <p>
                At Abdellatif Dev, We specialize in create custom software
                solution that are tailored to your business needs, whether you
                need a web application or a mobile app, our commitment to your
                success is unwavering. We understand that no two businesses are
                alike. We will work closely with you to deliver a solution that
                meets your requirements and helps you achieve your goals.
            </p>
        </WithImage>
    );
}
