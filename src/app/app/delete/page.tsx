import Button from "@/components/shared/button";
import { getDeleteDataBody, sendEmail } from "@/lib/emailer";

export default function Detele() {
    async function sendRequest(formData: FormData) {
        "use server";
        const email = formData.get("email") as string;
        const body = getDeleteDataBody(email);
        await sendEmail(body);
    }

    return (
        <main className="flex flex-col gap-8 justify-center items-center py-2 min-h-screen text-center">
            <form className="flex flex-col gap-8" action={sendRequest}>
                <h1 className="text-lg font-bold lg:text-4xl">
                    request deleting your data
                </h1>
                <input
                    name="email"
                    id="email"
                    type="text"
                    placeholder="email"
                    className="p-4 border-2 placeholder:text-sky-600 border-sky-400"
                />
                <Button type="submit">Send</Button>
            </form>
        </main>
    );
}
