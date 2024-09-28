"use client";

import { useFormState } from "react-dom";

import SubmitButton from "@/components/shared/button/submitButton";

import { sendRequest } from "./actions";

const initialState = {
    message: "",
};

export default function Detele() {
    const [state, formAction] = useFormState(sendRequest, initialState);
    return (
        <main>
            <form
                className="flex flex-col gap-10 items-center lg:mx-72 p-vertical"
                action={formAction}
            >
                <h1 className="mb-10 text-lg font-bold lg:text-4xl">
                    request deleting your data
                </h1>
                <input
                    required
                    name="email"
                    id="email"
                    type="email"
                    className="w-full"
                    placeholder="email"
                />

                <input
                    hidden
                    className="size-6"
                    type="checkbox"
                    name="agreed"
                />

                <select required className="w-full" id="app" name="app">
                    <option value="">Select an app</option>
                    <option value="Vidange 360">Vidange 360</option>
                </select>
                <SubmitButton />

                <h2 className="text-lg font-bold lg:text- xl">
                    {state?.message}
                </h2>
            </form>
        </main>
    );
}
