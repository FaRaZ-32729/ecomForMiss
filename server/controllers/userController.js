import { userModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";

// Register user
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.status(409).json({ msg: "User Already Exists" });

        const encryptedPass = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            name,
            email,
            password: encryptedPass,
            isActive: true  // New field, default true
        });

        return res.status(201).json({ msg: "User Registered Successfully", newUser });
    } catch (error) {
        return res.status(500).json({ msg: "Error occurred while creating user" });
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single user by ID
export const getSingleUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a user (profile)
export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { password, subRole, ...data } = req.body;

        const existingUser = await userModel.findById(id);
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }

        if (password) {
            data.password = await bcrypt.hash(password, 10);
        }

        const updatedUser = await userModel.findByIdAndUpdate(id, data, { new: true });
        return res.status(200).json({ message: "User updated successfully", user: updatedUser });

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ NEW: Toggle user active status
export const updateUserStatus = async (req, res) => {
    try {
        const id = req.params.id;
        const { isActive } = req.body;

        const updatedUser = await userModel.findByIdAndUpdate(id, { isActive }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json({ msg: "User status updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
