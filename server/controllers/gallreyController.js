import { imageModel } from "../models/gallreyModel.js";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addImage = async (req, res) => {
    try {
        const { name } = req.body;
        const picture = req.file ? `/images/${req.file.filename}` : null;

        if (!name || !picture) {
            return res.status(400).json({ msg: "Name and Image are required" });
        }

        const newImage = await imageModel.create({
            name,
            imageUrl: picture
        });

        return res.status(201).json({ msg: "Image Uploaded Successfully", newImage });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error while uploading image" });
    }
};

export const getAllImages = async (req, res) => {
    try {
        const images = await imageModel.find();
        return res.status(200).json({ images });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error while fetching images" });
    }
};



export const deleteImage = async (req, res) => {
    try {
        const image = await imageModel.findById(req.params.id);
        if (!image) return res.status(404).json({ msg: "Image not found" });

        if (image.imageUrl) {
            const imagePath = path.join(__dirname, "..", image.imageUrl);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await imageModel.findByIdAndDelete(req.params.id);

        return res.status(200).json({ msg: "Image deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error while deleting image" });
    }
};
