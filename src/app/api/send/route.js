// pages/api/contact.js
import EmailTemplate from "@/email/ContactUsEmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  CONTACT_EMAIL,
  NO_REPLY_EMAIL,
  SUPPORT_EMAIL
} from "@/utils/constants";
import { createContactFormSubmission } from "@/repositories/contactFormRepository";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request) {
  const { firstName, lastName, email, message, phone, subject } =
    await request.json();

  const customerDetails = `Customer trying to reach us via contact us form. Please contact.

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

  try {
    await resend.emails.send({
      from: NO_REPLY_EMAIL,
      to: [email],
      subject: subject,
      react: EmailTemplate({ name: `${firstName} ${lastName}` })
    });

    await resend.emails.send({
      from: CONTACT_EMAIL,
      to: [SUPPORT_EMAIL],
      subject: `New Contact Form Submission`,
      text: `You have a new contact form submission:\n${customerDetails}`
    });

    const submission = await createContactFormSubmission({
      firstName,
      lastName,
      email,
      message,
      phone
    });

    return new NextResponse(
      JSON.stringify({ success: true, data: submission }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error(error);
    const errorMessage = error.message.includes("email")
      ? "Failed to send email. Please try again later."
      : "Failed to save submission. Please try again later.";
    return new NextResponse(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500
      }
    );
  }
}
