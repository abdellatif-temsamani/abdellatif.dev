import Card from "@/app/(components)/(shared)/(card)";
import H1 from "@/app/(components)/(shared)/(title)/H1";
import { Feature, features } from "@/lib/features";

export default function Features() {
    return (
        <div className="flex flex-col gap-14 justify-between sm:gap-12">
            <H1 className="lg:w-1/2">
                We specialize in Web Development, Mobile Application
                Development, and Custom Software Solutions
            </H1>
            <div className="flex flex-col gap-14 justify-between lg:flex-row">
                {features.map((feature: Feature) => {
                    return <Card key={feature.title} cardInfo={feature} />;
                })}
            </div>
        </div>
    );
}
