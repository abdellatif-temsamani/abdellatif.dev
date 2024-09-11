"use client";

import { useFormState } from "react-dom";

import SubmitButton from "@/components/shared/button/submitButton";

import { sendRequest } from "./actions";

const initialState = {
    message: "",
};

export default function Contact() {
    const [state, formAction] = useFormState(sendRequest, initialState);
    return (
        <main>
            <form className="flex flex-col gap-10 lg:mx-40" action={formAction}>
                <h1>contact Us</h1>

                <h2>Personal Information</h2>
                <div className="gap-10 w-full lg:gap-16 laptop-flex">
                    <input
                        required
                        name="name"
                        id="name"
                        type="text"
                        className="w-full"
                        placeholder="Full Name"
                    />
                    <input
                        required
                        name="email"
                        id="email"
                        type="text"
                        className="w-full"
                        placeholder="email"
                    />
                </div>

                <h2>Project Details</h2>

                <div className="gap-10 w-full lg:gap-16 laptop-flex">
                    <input
                        required
                        name="subject"
                        id="name"
                        type="text"
                        className="w-full"
                        placeholder="A brief title for the inquiry"
                    />

                    <select required className="w-full" id="type" name="type">
                        <option value="">Select project type</option>
                        <option value="website development">
                            Website Development
                        </option>
                        <option value="web application">Web Application</option>
                        <option value="mobile app development">
                            Mobile App Development
                        </option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <textarea
                    required
                    name="description"
                    id="name"
                    placeholder="a Description of the project"
                ></textarea>

                <div className="flex gap-4 items-center">
                    <input
                        required
                        className="size-6"
                        type="checkbox"
                        name="agreed"
                    />
                    <p className="text-sm">
                        Your privacy is important to us. The information you
                        provide will only be used to respond to your inquiry and
                        will not be shared with third parties without your
                        consent.
                    </p>
                </div>

                <input
                    required
                    hidden
                    className="size-6"
                    type="checkbox"
                    name="agreed"
                />
                <SubmitButton />
                <h2 className="text-lg font-bold lg:text- xl">
                    {state?.message}
                </h2>
            </form>
        </main>
    );
}
