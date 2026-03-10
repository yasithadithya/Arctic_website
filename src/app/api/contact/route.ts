import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Subject mapping for better readability
        const subjectMap: Record<string, string> = {
            computers: "Computers & Smart Devices",
            repair: "Computer Repair & Services",
            mobile: "Mobile Phone Repairs",
            powerapps: "Power App Solutions",
            web: "Website Design",
            identity: "Software Solutions",
            other: "Other Inquiry",
        };

        const readableSubject = subjectMap[subject] || subject;

        // Email content
        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: "yasithadithya@gmail.com",
            replyTo: email,
            subject: `New Contact Form Inquiry: ${readableSubject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #00D9FF; border-bottom: 2px solid #00D9FF; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                        <p><strong>Service Inquiry:</strong> ${readableSubject}</p>
                    </div>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
                        <h3 style="color: #333; margin-top: 0;">Message</h3>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">
                        This email was sent from the Arctic Technologies website contact form.
                    </p>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Send confirmation email to the user
        const confirmationMailOptions = {
            from: process.env.SMTP_EMAIL,
            to: email,
            subject: "Thank you for contacting Arctic Technologies",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #00D9FF;">Thank You for Reaching Out!</h2>
                    
                    <p>Dear ${name},</p>
                    
                    <p>We have received your inquiry regarding <strong>${readableSubject}</strong>. 
                    Our team will review your message and get back to you within 24 hours.</p>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Your Message</h3>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <p>If you have any urgent matters, please feel free to call us at 
                    <a href="tel:+94788861811">+94 78 88 618 11</a>.</p>
                    
                    <p>Best regards,<br>
                    <strong>Arctic Technologies Team</strong></p>
                    
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">
                        Arctic Technologies | Sri Lanka<br>
                        <a href="https://arctictechnologies.org.lk">www.arctictechnologies.org.lk</a>
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(confirmationMailOptions);

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
