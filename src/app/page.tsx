import { Features, Hero, InnovaTech, Testimonials } from "@/components/home";

export default function Home() {
    return (
        <main>
            <div className="flex flex-col gap-28">
                <Hero />
                <Features />
                <InnovaTech />
                <Testimonials />
            </div>
        </main>
    );
}
