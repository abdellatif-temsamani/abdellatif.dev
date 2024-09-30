import Card from "@/components/shared/card";
import { Feature } from "@/lib/features";

export const features: Feature[] = [
    {
        title: "Specialized IT solutions",
        description:
            "Abdellatif Dev will empower and guide you to realize your full potential.",
    },
    {
        title: "High quality solution",
        description: "We Provide High Quality Solutions for Your Business",
    },
    {
        title: "UX / UI",
        description: "We creating visually appealing and user-friendly UI",
    },
];

export default function Features(): JSX.Element {
    return (
        <div className="flex flex-col gap-14 justify-between sm:gap-12 p-vertical">
            <h1>
                We specialize in Web Development, Mobile Application
                Development, and Custom Software Solutions
            </h1>
            <div className="flex flex-col gap-14 justify-between lg:flex-row">
                {features.map((feature: Feature) => {
                    return <Card key={feature.title} cardInfo={feature} />;
                })}
            </div>
        </div>
    );
}
