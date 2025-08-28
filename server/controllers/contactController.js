import { contactModel } from "../models/contactModel.js";

// CREATE (Already exists)
export const contactData = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: "All Fields Are Required" });
        }

        const data = await contactModel.create({ name, email, message });
        return res.status(200).json({ message: "Message Sent Successfully", data });
    } catch (error) {
        return res.status(500).json({ message: "Failed to send message", error: error.message });
    }
};

// GET all messages
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await contactModel.find().sort({ createdAt: -1 });
        return res.status(200).json({ message: "Contacts fetched successfully", contacts });
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch contacts", error: error.message });
    }
};

// DELETE a message by ID
export const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await contactModel.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        return res.status(200).json({ message: "Contact deleted successfully", deletedContact });
    } catch (error) {
        return res.status(500).json({ message: "Failed to delete contact", error: error.message });
    }
};
