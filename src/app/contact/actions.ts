"use server";
import { Body, sendEmail } from "@/lib/emailer";

type Data = {
    name: string;
    email: string;
    subject: string;
    type: string;
    description: string;
    okay: string;
};

function getData(formData: FormData): Data {
    return {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        type: formData.get("type") as string,
        description: formData.get("description") as string,
        okay: formData.get("okay") as string,
    };
}

function getDeleteDataBody(formData: FormData): Body {
    const data = getData(formData);
    const text = JSON.stringify(data);

    return {
        from: "web@abdellatif.dev",
        to: "contact@abdellatif.dev",
        subject: "Project | work offer",
        html: text,
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
        const body = getDeleteDataBody(formData);
        await sendEmail(body);
        return { message: "Your request will be handled in the next 24 hours" };
    } catch {
        return { message: "error while sending the request" };
    }
}
