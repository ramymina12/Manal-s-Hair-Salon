import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

export default async function contactHandler(request, response) {
    if (request.method !== "POST") {
        return response.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = request.body;
    if (
        name === "" ||
        email === "" ||
        message === "" ||
        !validateEmail(email)
    ) {
        return response.status(405).json({ error: "Method not allowed" });
    }
    const atSymbol = email.indexOf("@");
    const emailBeforeAtSymbol = email.slice(0, atSymbol);

    const resendResponse = await resend.emails.send({
        from: `${emailBeforeAtSymbol}@resend.dev`,
        to: "ramy.mina0214@gmail.com", // TODO: Add Samo's mom's email here!
        subject: "New Contact Submission",
        html: `<p>${name} says:<br>${message}</p>`,
        replyTo: email,
    });

    if (resendResponse) {
        if (resendResponse.error === null) {
            return response
                .status(200)
                .json({ message: "Email sent successfully" });
        } else {
            console.log(resendResponse.error);
            return response.status(405).json({ error: "Method not allowed" });
        }
    } else {
        return response.status(405).json({ error: "Method not allowed" });
    }
}
