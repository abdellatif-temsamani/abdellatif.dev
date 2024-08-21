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
        <Button width="half" disabled={pending} type="submit">
            Send
        </Button>
    );
}

export default function Detele() {
    const [state, formAction] = useFormState(sendRequest, initialState);
    const apps = ["Vidange 360"];
    return (
        <main>
            <form
                className="flex lg:mx-72 flex-col gap-10 items-center"
                action={formAction}
            >
                <h1 className="text-lg mb-10 font-bold lg:text-4xl">
                    request deleting your data
                </h1>
                <input
                    required
                    name="email"
                    id="email"
                    type="text"
                    className="w-full"
                    placeholder="email"
                />

                <select required className="w-full" id="app" name="app">
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
