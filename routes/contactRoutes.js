import express from "express";
import {
  createContact,
  deleteAContact,
  getAllContacts,
  updateAContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.route("/").post(createContact).get(getAllContacts);
router.route("/:id").put(updateAContact).delete(deleteAContact);

export default router;
