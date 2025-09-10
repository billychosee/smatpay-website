import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, phone, email, subject, message } = body;

    if (!email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>", // make sure domain is verified in Resend
      to: "billy@smatechgroup.com",
      subject: subject || `Contact Form Email ${name || email}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Resend response:", data);
    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error sending message." }, { status: 500 });
  }
}
