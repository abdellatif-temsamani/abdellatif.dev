import Button from "@/components/shared/button";
export default function Detele() {
    async function sendRequest() { }
    return (
        <main className="flex flex-col gap-8 justify-center items-center py-2 min-h-screen text-center">
            <h1 className="text-lg font-bold lg:text-4xl">
                request deleting your data
            </h1>
            <form action={sendRequest}>
                <input
                    type="text"
                    placeholder="email"
                    className="p-4 border-2 placeholder:text-sky-600 border-sky-400"
                />
                <Button>Send</Button>
            </form>
        </main>
    );
}
