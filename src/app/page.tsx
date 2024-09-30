import Features from "@/components/pages/home/features";
import Hero from "@/components/pages/home/hero";
import InnovaTech from "@/components/pages/home/innovatech";
import Testimonials from "@/components/pages/home/testimonials";

export default function Home() {
    return (
        <main>
            <Hero />
            <Features />
            <InnovaTech />
            <Testimonials />
        </main>
    );
}
