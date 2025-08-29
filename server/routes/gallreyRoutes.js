// routes/imageRoutes.js
import express from "express";
import multer from "multer";
import { addImage, getAllImages, deleteImage } from "../controllers/gallreyController.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./images");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const uploadFile = multer({ storage: storage }).single("image");

// Routes
router.post("/", uploadFile, addImage);
router.get("/", getAllImages);
router.delete("/:id", deleteImage);

export default router;
