"use server";
import { getDeleteDataBody, sendEmail } from "@/lib/emailer";

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
