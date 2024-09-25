"use server";
import { Body, sendEmail } from "@/lib/emailer";

function getDeleteDataBody(email: string, app: string): Body {
    const text = `Dear Abdellatif dev
        I request delete all my data for the app ${app}
        with the following email ${email}`;

    const html = `<h1>Dear Abdellatif dev</h1>
    <p>
        I request delete all my data for the app <b>${app}</b>
        with the following email <b>${email}</b> <br />
    </p>`;

    return {
        from: "web@abdellatif.dev",
        to: "contact@abdellatif.dev",
        subject: `${app}: request to delete data`,
        text: text,
        html: html,
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
        const email = formData.get("email");
        const app = formData.get("app");

        if (email !== null && app !== null) {
            const body = getDeleteDataBody(email.toString(), app.toString());
            await sendEmail(body);
            return {
                message: "Your request will be handled in the next 24 hours",
            };
        } else {
            return { message: "error while sending the request" };
        }
    } catch {
        return { message: "error while sending the request" };
    }
}
