import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true }
}, { timestamps: true });

export const imageModel = mongoose.model("Image", imageSchema);