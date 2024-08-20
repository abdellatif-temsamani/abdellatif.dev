"use client";
import { useFormState, useFormStatus } from "react-dom";

import Button from "@/components/shared/button";

import { sendRequest } from "./actions";

const initialState = {
    message: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button disabled={pending} type="submit">
            Send
        </Button>
    );
}

export default function Detele() {
    const [state, formAction] = useFormState(sendRequest, initialState);
    const apps = ["Vidange 360"];
    return (
        <main className="flex flex-col justify-center items-center min-h-dvh">
            <form className="flex flex-col gap-16" action={formAction}>
                <h1 className="text-lg font-bold lg:text-4xl">
                    request deleting your data
                </h1>
                <input
                    required
                    name="email"
                    id="email"
                    type="text"
                    placeholder="email"
                    className="p-4 border-2 bg-sky-50 placeholder:text-sky-600 border-sky-400"
                />

                <select
                    required
                    id="app"
                    name="app"
                    className="p-4 border-2 bg-sky-50 placeholder:text-sky-600 border-sky-400"
                >
                    <option value="">Select an app</option>
                    {apps.map((app) => (
                        <option value={app}>{app}</option>
                    ))}
                </select>
                <SubmitButton />
                <h2 className="text-lg font-bold lg:text- xl">
                    {state?.message}
                </h2>
            </form>
        </main>
    );
}
