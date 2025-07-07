import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const { MAIL_USER, MAIL_PASS } = process.env;

async function sendEmail({ subject, body }: { subject: string; body: string }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
  });

  return transporter.sendMail({
    from: `"Performance Marketing Lead" <${MAIL_USER}>`,
    to: "therupeshneelam@gmail.com",
    subject,
    html: body,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phoneNumber,
      highestQualification,
      nativeState,
      course,
    } = body;

    const emailBody = `
      <h2>New Performance Marketing Course Enrollment</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Highest Qualification:</strong> ${highestQualification}</p>
      <p><strong>State:</strong> ${nativeState}</p>
      <p><strong>Course:</strong> ${course || "Performance Marketing"}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
    `;

    await sendEmail({
      subject: `New Performance Marketing Course Enrollment - ${fullName}`,
      body: emailBody,
    });

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
