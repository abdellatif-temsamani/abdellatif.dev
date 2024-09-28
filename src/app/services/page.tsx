import { Hero } from "@/components/pages/services";
import CallToAction from "@/components/pages/services/callToAction";
import Expertises from "@/components/pages/services/expertise";
import Features from "@/components/pages/services/features";

export default function About() {
    return (
        <main className="pb-0">
            <Hero />
            <Features />
            <Expertises />
            <CallToAction />
        </main>
    );
}
