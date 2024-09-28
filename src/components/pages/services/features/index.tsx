import Card from "@/components/shared/card";
import { Feature } from "@/lib/features";

export const features: Feature[] = [
    {
        title: "Responsive Designs for Seamless User Experience",
        description:
            "We prioritize responsive design to ensure your website or web application " +
            " looks great and functions flawlessly on all devices," +
            " providing a seamless user experience.",
    },
    {
        title: "E-commerce Solutions for Online Success",
        description:
            "Our e-commerce solutions are designed to help you achieve online success," +
            " with features such as secure payment gateways," +
            " inventory management, and user-friendly interfaces.",
    },
    {
        title: "Optimized Performance for Faster Loading",
        description:
            "We optimize the performance of your website or " +
            " web application to ensure faster loading times, reducing " +
            " bounce rates and improving user satisfaction.",
    },
];

export default function Features(): JSX.Element {
    return (
        <div className="flex flex-col gap-14 justify-between sm:gap-12 p-vertical">
            <h1>
                Custom Websites and Web Applications Built with the Latest
                Technologies
            </h1>
            <p>
                At Abdellatif Dev, we specialize in creating high-quality and
                user-friendly mobile applications for both iOS and Android
                platforms. Our team of experienced software engineers is
                dedicated to delivering innovative solutions that meet the
                unique needs of our clients. From concept to deployment, we
                ensure a seamless development process and provide ongoing
                support to ensure the success of your mobile app.
            </p>
            <div className="flex flex-col gap-14 justify-between xl:flex-row">
                {features.map((feature: Feature) => {
                    return (
                        <div className="w-full" key={feature.title}>
                            <Card cardInfo={feature} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
