import mongoose from "mongoose";
import { userModel } from "../models/userModel.js"
import { imageModel } from "../models/gallreyModel.js";

const favouriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    galleryItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
        required: true
    }
}, { timestamps: true });

export const favouriteModel = mongoose.model("favourite", favouriteSchema);
