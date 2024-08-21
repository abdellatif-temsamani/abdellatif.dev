"use server";
import { body, sendEmail } from "@/lib/emailer";

function getDeleteDataBody(email: string, app: string): body {
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
    try {
        const email = formData.get("email") as string;
        const app = formData.get("app") as string;
        const body = getDeleteDataBody(email, app);
        await sendEmail(body);
        return { message: "Your request will be handled in the next 24 hours" };
    } catch {
        return { message: "error while sending the request" };
    }
}
