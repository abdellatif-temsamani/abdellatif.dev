import { Features, Hero, InnovaTech } from "./(components)/(home)";

export default function Home() {
    return (
        <main>
            <article className="flex flex-col gap-28">
                <Hero />
                <Features />
                <InnovaTech />
            </article>
        </main>
    );
}
