import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });


export const userModel = mongoose.model("user", userSchema);