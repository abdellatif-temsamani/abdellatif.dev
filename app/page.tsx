import { Features, Hero } from "./(components)/(home)";

export default function Home() {
    return (
        <main>
            <article className="flex flex-col gap-20">
                <Hero />
                <Features />
            </article>
        </main>
    );
}
