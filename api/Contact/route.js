import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function contactHandler(request, response) {
    if (request.method !== "POST") {
        return response.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = request.body;
    const atSymbol = email.indexOf("@");
    const emailBeforeAtSynbol = email.slice(0, atSymbol);

    const success = await resend.emails.send({
        from: `${emailBeforeAtSynbol}@resend.dev`,
        to: "ramy.mina0214@gmail.com",
        subject: "New Contact Submission",
        html: `<p>${name} says:<br>${message}</p>`,
        replyTo: email,
    });

    if (success) {
        if (success.error === null) {
            console.log("Email sent successfully!");
        } else {
            console.log("Email has not been sent.");
        }
    } else {
        console.log("Email has not been sent.");
    }
}
