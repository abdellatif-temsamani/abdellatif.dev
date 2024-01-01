import { Hero } from "./(components)/(hero)";
import H1 from "./(components)/(shared)/(title)/H1";

export default function Home() {
    return (
        <main>
            <article className="flex flex-col gap-20">
                <Hero />

                {/* Services */}
                <H1
                    text="We specialize in Web Development, Mobile Application Development, and Custom Software Solutions"
                    className="sm:w-1/2"
                />
            </article>
        </main>
    );
}
