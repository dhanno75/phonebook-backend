import mongoose from "mongoose";
import validator from "validator";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    // using regex for the phone number
    match: "((+*)((0[ -]*)*|((91 )*))((d{12})+|(d{10})+))|d{5}([- ]*)d{6}",
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: true,
    lowecase: true,
    // using validator package to validate the email
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  address: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
