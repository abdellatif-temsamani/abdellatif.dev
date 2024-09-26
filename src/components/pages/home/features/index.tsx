import Card from "@/components/shared/card";
import { Feature, features } from "@/lib/features";

/**
 * features component (home page)
 * contains top 3 features.
 *
 * @returns {JSX.Element}
 */
export default function Features(): JSX.Element {
    return (
        <div className="flex flex-col gap-14 justify-between sm:gap-12 p-vertical">
            <h1 className="lg:w-2/3">
                We specialize in Web Development, Mobile Application
                Development, and Custom Software Solutions
            </h1>
            <div className="flex flex-col gap-14 justify-between lg:flex-row">
                {features.map((feature: Feature) => {
                    return (
                        <div key={feature.link}>
                            <Card cardInfo={feature} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
