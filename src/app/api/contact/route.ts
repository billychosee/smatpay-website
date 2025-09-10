// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // ✅ tells Next.js to run this API in Node runtime

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, company, phone, email, subject, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>", // use verified domain in production
      to: "billy@smatechgroup.com",
      subject: subject || `New contact form submission from ${name || email}`,
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

    return NextResponse.json({ message: "Message sent successfully.", data });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ message: "Error sending message." }, { status: 500 });
  }
}
