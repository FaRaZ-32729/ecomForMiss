import express from 'express'
import multer from 'multer'
import { addProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from '../controllers/productController.js';

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});
const uploadFile = multer({ storage: storage }).single("image");



router.post("/", uploadFile, addProduct);
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.put("/:id", uploadFile, updateProduct);
router.delete("/:id", deleteProduct);

export default router;