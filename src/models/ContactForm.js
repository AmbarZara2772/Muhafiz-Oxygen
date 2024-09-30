import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, match: /.+@.+\..+/ },
    message: { type: String, required: true },
    phone: { type: String, required: true }
  },
  { timestamps: true }
);

const ContactForm =
  mongoose.models.ContactForm ||
  mongoose.model("ContactForm", contactFormSchema, "contact_form_data");

export default ContactForm;
