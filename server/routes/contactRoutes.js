import express from "express";
import { contactData, deleteContact, getAllContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", contactData);
router.get("/", getAllContacts);
router.delete("/:id", deleteContact);

export default router;
