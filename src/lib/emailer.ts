import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export type Body = {
    from: "web@abdellatif.dev";
    to: "contact@abdellatif.dev";
    subject: string;
    text: string;
    html?: string;
};

/**
 * @returns {nodemailer.Transporter<SMTPTransport.SentMessageInfo>} email instance
 */
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

/**
 * @param {Body} body email of the body
 */
export async function sendEmail(body: Body) {
    const emailer = getEmailInstance();
    await emailer.sendMail(body);
}
