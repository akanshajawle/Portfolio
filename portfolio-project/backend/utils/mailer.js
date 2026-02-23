const nodemailer = require('nodemailer');

// Create transporter for sending emails
// For Gmail, you need to use App Password (not your regular password)
// Go to Google Account > Security > 2-Step Verification > App Passwords
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your@gmail.com
      pass: process.env.EMAIL_PASS, // your app password
    },
  });
};

// Send contact form email to portfolio owner
const sendContactEmail = async (name, email, subject, message) => {
  try {
    const transporter = createTransporter();

    // Email to portfolio owner (you)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">New Contact Message from Portfolio</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
          </div>
          <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #e2e8f0;">
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
};

module.exports = {
  sendContactEmail,
};
