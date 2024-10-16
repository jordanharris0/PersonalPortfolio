const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

const nodemailer = require("nodemailer");

//set up transporter SMTP config
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

//contact submission form route
router.post("/", async (req, res) => {
  const { name, email, phoneNumber, message } = req.body;

  try {
    //store contact information in the database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        phoneNumber,
        message,
      },
    });

    //send an email notification
    let mailOption = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form from ${name}`,
      text: `
      You have received a new contact form submission:

      Name: ${name}
      Email: ${email}
      Phone: ${phoneNumber}
      Message: ${message} 
      `,
    };

    //send email
    transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
        return res
          .status(500)
          .json({ error: "Failed to send email notification" });
      }
      console.log("Email sent: " + info.response);
    });

    res.status(201).json({
      message: "Contact form submitted successfully",
      data: contactMessage,
    });
  } catch (error) {
    console.error("Error submitting contact form: ", error);
    res.status(500).json({ error: "Failed to submit contact form" });
  }
});

module.exports = router;
