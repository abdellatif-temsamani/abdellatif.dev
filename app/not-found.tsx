import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col gap-8 justify-center items-center py-2 min-h-screen text-center">
            <h1 className="text-lg font-bold lg:text-4xl">
                This site is under construction
            </h1>

            <Image
                src="/image.svg"
                alt="Under Construction"
                width={500}
                height={500}
            />
        </main>
    );
}
