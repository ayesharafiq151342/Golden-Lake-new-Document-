import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connect } from "../../src/dbconfig/dbconfig"; // اپنی MongoDB کنکشن فائل امپورٹ کریں
import User from "../../src/models/Demoform"; // اپنا Mongoose ماڈل امپورٹ کریں



export async function POST(req) {
  try {
    await connect();
    const { name, email, phone, message } = await req.json();

   
    const newUser = new User({ name, email, phone, message });
    await newUser.save();

 
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL, 
        pass: process.env.ADMIN_PASSWORD, 
      },
    });
    const mailOptions = {
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL, // Admin کو Email جائے گی
      subject: "New Contact Form Submission",
      html: `
        <div style="max-width: 600px; margin: 20px auto; padding: 20px; border-radius: 8px; background-color: #f9f9f9; font-family: Arial, sans-serif;">
      <h2 style="color: #800080; text-align: center;">New Contact Form Submission</h2>
      <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 16px; color: #333;"><strong>Phone:</strong> ${phone}</p>
        <p style="font-size: 16px; color: #333;"><strong>Message:</strong></p>
        <p style="background: #fcd1fc; padding: 10px; border-left: 4px solid #1e40af; color: #333;">${message}</p>
      </div>
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
      <p style="font-size: 12px; color: gray; text-align: center;">This is an automated email. Please do not reply.</p>
    </div>  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Form submitted and email sent!" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
