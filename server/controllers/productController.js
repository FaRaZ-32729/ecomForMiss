import { productModel } from "../models/productModel.js";
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



export const addProduct = async (req, res) => {
    try {
        const { name, smallDescription, detail, price, starRating, reviews, category } = req.body;
        const sizes = JSON.parse(req.body.sizes);
        const picture = req.file ? `/images/${req.file.filename}` : null;

        if (!name || !smallDescription || !detail || !starRating || !reviews || !category || !picture) {
            return res.status(400).json({ msg: "All Fields Are Required" });
        }

        const newProduct = await productModel.create({
            name,
            smallDescription,
            detail,
            starRating,
            reviews,
            price,
            category,
            sizes: sizes,
            imageUrl: picture
        });

        return res.status(201).json({ msg: "Product Added Successfully", newProduct });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error Occurred While Creating New Product" });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await productModel.find();
        return res.status(200).json({ allProducts });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error Occurred While Fetching Products", error: error.message });
    }
};

export const getSingleProduct = async (req, res) => {
    try {
        const singleProduct = await productModel.findById(req.params.id);
        if (!singleProduct) {
            return res.status(404).json({ msg: "Product Not Found" });
        }
        return res.status(200).json({ singleProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error Occurred While Fetching Product", error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const sizes = JSON.parse(req.body.sizes);
        const updates = {
            name: req.body.name,
            smallDescription: req.body.smallDescription,
            detail: req.body.detail,
            starRating: req.body.starRating,
            price: req.body.price,
            reviews: req.body.reviews,
            category: req.body.category,
            sizes: sizes,
        };
        if (req.file) {
            updates.imageUrl = `/images/${req.file.filename}`;
        }

        const updatedProduct = await productModel.findByIdAndUpdate(_id, updates, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ msg: "Product Not Found" });
        }

        return res.status(200).json({ msg: "Product Updated Successfully", updatedProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error Occurred While Updating Product" });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const product = await productModel.findById(_id);
        if (!product) return res.status(404).json({ msg: "Product Not Found" });

        if (product.imageUrl) {
            const imagePath = path.join(__dirname, "..", product.imageUrl);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await productModel.findByIdAndDelete(_id);

        return res.status(200).json({ msg: "Product Deleted Successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error Occurred While Deleting Product" });
    }
};
