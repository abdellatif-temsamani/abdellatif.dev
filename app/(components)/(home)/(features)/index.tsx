import Card from "@/app/(components)/(shared)/(card)";
import H1 from "@/app/(components)/(shared)/(title)/H1";
import { Feature, features } from "@/lib/features";

/**
 * features component (home page)
 * contains top 3 features.
 *
 * @returns {JSX.Element}
 */
export default function Features(): JSX.Element {
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
