import { json, type RequestHandler } from "@sveltejs/kit";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    service : "gmail",
    auth: {
        user: "neelamverma130604@gmail.com",
        pass: "sngkuqkjcjzslanv"
    }
});

export const POST: RequestHandler = async ({ request }) => {
    try {
        const jsonData: any = await request.json();

        const message = {
            from: "neelamverma130604@gmail.com",
            to: jsonData.mail,
            subject: "Thank you for contact us ",
            html: `
                <p>Hello ${jsonData.name}, <br/><br/>
                Thank you for reaching out to us through our contact form. We truly appreciate your interest and value the opportunity to connect with you.
                Your message has been received, and our team is currently reviewing it. 
                <br/><br/>
                We aim to respond to all inquiries promptly, so please expect to hear back from us within the next 24-48 hours.
                In the meantime, if you have any urgent concerns or additional information you'd like to share, 
                please feel free to reach out to us directly at [insert contact email or phone number].
                <br/><br/>
                Once again, thank you for contacting us. We look forward to assisting you and discussing how we can meet your needs.
                <br/><br/>
                Best regards,<br/><br/>
                Neelam verma
                </p>
            `
        };

        const responseMail=await transport.sendMail(message)

        return json({ code: 200, body: responseMail });
    } catch (error: any) {
        return json({ code: 200, body: error.message });
    }
}
