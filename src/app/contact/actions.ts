"use server";
import { Body, sendEmail } from "@/lib/emailer";

function getData(formData: FormData) {
    const keys: FormDataIterator<string> = formData.keys();
    const data: { [key: string]: FormDataEntryValue | null } = {};

    keys.map((key) => {
        data[key] = formData.get(key);
    });

    console.log(data);
    return data;
}

function getContactUsDataBody(formData: FormData): Body {
    const data = getData(formData);
    const text = JSON.stringify(data);

    return {
        from: "web@abdellatif.dev",
        to: "contact@abdellatif.dev",
        subject: "Project | work offer",
        text: text,
    };
}

export async function sendRequest(_prevState: any, formData: FormData) {
    const checked = formData.get("agreed");
    if (checked === "on") {
        return {
            message: "i say no you bot",
        };
    }

    try {
        const body = getContactUsDataBody(formData);
        await sendEmail(body);
        return { message: "Your request will be handled in the next 24 hours" };
    } catch {
        return { message: "error while sending the request" };
    }
}
