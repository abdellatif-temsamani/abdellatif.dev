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

export async function sendEmail(body: body) {
    const emailer = getEmailInstance();
    await emailer.sendMail(body);
}
