import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export type body = {
    from: "web@abdellatif.dev";
    to: "contact@abdellatif.dev";
    subject: string;
    text: string;
    html: string;
};

function getEmailInstance(): nodemailer.Transporter<SMTPTransport.SentMessageInfo> {
    return nodemailer.createTransport({
        host: "mail.abdellatif.dev",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
}

export function getDeleteDataBody(email: string, app: string): body {
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

export async function sendEmail(body: body) {
    const emailer = getEmailInstance();
    await emailer.sendMail(body);
}
