import {
    Features,
    Hero,
    InnovaTech,
    Testimonials,
} from "@/components/home";

export default function Home() {
    return (
        <main>
            <article className="flex flex-col gap-28">
                <Hero />
                <Features />
                <InnovaTech />
                <Testimonials />
            </article>
        </main>
    );
}
