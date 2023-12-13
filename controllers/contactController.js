import Contact from "../models/contactModel.js";

// Creating a contact
export const createContact = async (req, res, next) => {
  try {
    const { name, email, address, phone } = req.body;

    // Checking if the contact exists with same email address
    const existingContact = await Contact.findOne({ phone });
    if (existingContact) {
      res.status(400).json({
        status: "fail",
        message: "Contact with this phone number already exist.",
      });
    } else {
      const newContact = await Contact.create({
        name,
        email,
        address,
        phone,
      });

      res.status(201).json({
        status: "success",
        data: newContact,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong, please try after sometime.",
    });
  }
};

// Getting all the contacts
export const getAllContacts = async (req, res, next) => {
  try {
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);

    const contacts = await Contact.find(queryObj);

    res.status(200).json({
      status: "success",
      data: contacts,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong, please try after sometime.",
    });
  }
};

// Deleting a contact
export const deleteAContact = async (req, res, next) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong, please try after sometime.",
    });
  }
};

// Updating a contact
export const updateAContact = async (req, res, next) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: updatedContact,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong, please try after sometime",
    });
  }
};
