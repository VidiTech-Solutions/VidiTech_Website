import { Resend } from "resend";
import Contact from "../models/contact.model.js";
import {
  formatDate,
  getInterestSpecificContent,
  getMessagePreview,
} from "../utils/email.utils.js";
import {
  adminEmailTemplate,
  clientEmailTemplate,
} from "../templates/email.templates.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, interest, budget, message } = req.body;

    const contact = new Contact({
      name,
      email,
      interest,
      budget,
      message,
    });

    const savedContact = await contact.save();

    const interestContent = getInterestSpecificContent(interest);
    const messagePreview = getMessagePreview(message);
    const formattedDate = formatDate();

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: `VidiTech <${process.env.FROM_EMAIL || "info@viditech.online"}>`,
        to: [process.env.ADMIN_EMAIL || "info@viditech.online"],
        reply_to: email,
        subject: `New ${interest} Inquiry from ${name} - ${messagePreview}`,
        html: adminEmailTemplate(
          name,
          email,
          interest,
          budget,
          message,
          interestContent,
          formattedDate,
          savedContact._id
        ),
      });
    } catch (emailError) {
      // Continue execution even if admin email fails
    }

    try {
      await resend.emails.send({
        from: `VidiTech <${process.env.FROM_EMAIL || "info@viditech.online"}>`,
        to: [email],
        subject: `Thank you for contacting VidiTech - We've received your ${interest} inquiry`,
        html: clientEmailTemplate(name, interest, interestContent),
      });
    } catch (emailError) {
      // Continue execution even if client email fails
    }

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: savedContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error submitting contact form",
      error: error.message,
    });
  }
};

export const testEmailSending = async (req, res) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const interestContent = getInterestSpecificContent("Website Development");

    const result = await resend.emails.send({
      from: `VidiTech <${process.env.FROM_EMAIL || "info@viditech.online"}>`,
      to: [process.env.ADMIN_EMAIL || "info@viditech.online"],
      subject: "Test Email from Contact Form",
      html: clientEmailTemplate(
        "Test User",
        "Website Development",
        interestContent
      ),
    });

    res.status(200).json({
      success: true,
      message: "Test email sent successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error sending test email",
      error: error.message,
    });
  }
};
