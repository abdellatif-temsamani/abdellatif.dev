import Card from "@/components/shared/card";
import { Feature } from "@/lib/features";

export const expertises: Feature[] = [
    {
        title: "Custom Mobile App Development Solutions",
        description:
            "We offer custom mobile app development solutions tailored to your business requirements.",
    },
    {
        title: "User-Friendly Interface Design",
        description:
            "Our team focuses on creating intuitive and user-friendly interfaces for enhanced user experience.",
    },
    {
        title: "Seamless Integration and Deployment",
        description:
            "We ensure seamless integration and deployment of your mobile app across platforms.",
    },
];

export default function Expertises(): JSX.Element {
    return (
        <div className="flex flex-col gap-14 justify-between sm:gap-12 p-vertical">
            <h1>Expert Mobile App Development Services for iOS and Android</h1>
            <p>
                At Abdellatif Dev, we specialize in creating high-quality and
                user-friendly mobile applications for both iOS and Android
                platforms. Our team of experienced software engineers is
                dedicated to delivering innovative solutions that meet the
                unique needs of our clients. From concept to deployment, we
                ensure a seamless development process and provide ongoing
                support to ensure the success of your mobile app.
            </p>
            <div className="flex flex-col gap-14 justify-between lg:flex-row">
                {expertises.map((feature: Feature) => {
                    return (
                        <div key={feature.description}>
                            <Card className="h-full" cardInfo={feature} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
