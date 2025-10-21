const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");

// Load environment variables from .env if present
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection - prefer environment variable for production / hosted DBs
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/contactDB";
mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.warn("MongoDB connection warning:", err.message));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// Nodemailer (use env vars for credentials; do NOT commit real credentials)
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
if (!emailUser || !emailPass) {
  console.warn('WARNING: EMAIL_USER or EMAIL_PASS not set. Email notifications will fail until set.');
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

// API route for contact form
app.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Save to DB
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send notification email if transporter has credentials
    if (emailUser && emailPass) {
      await transporter.sendMail({
        from: email,
        to: emailUser, // receiver configured via EMAIL_USER
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      });
    }

    res.json({ success: true, message: "\u2705 Message received!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "\u274c Something went wrong." });
  }
});

// Run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
