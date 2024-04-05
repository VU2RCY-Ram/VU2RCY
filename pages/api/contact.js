import { transporter, mailOptions } from "@/config/nodeMailer";
import { EmailTemplate, TextTemplate } from "@/config/emailTemplates";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.name ||
      !data.email ||
      !data.callSign ||
      !data.phoneNumber ||
      !data.message ||
      !data.subject
    ) {
      return res.status(400).json({ Message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: TextTemplate(data),
        html: EmailTemplate(data),
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ Message: error.message });
    }
  }
  return res.status(400).json({ Message: "Bad request" });
}
