// models/Product.js
import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        smallDescription: {
            type: String,
            required: true,
        },
        detail: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
        starRating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        reviews: {
            type: Number,
            required: true,
            default: 0,
        },
        category: {
            type: String,
            required: true
        },
        sizes: {
            S: { type: Boolean, default: false },
            M: { type: Boolean, default: false },
            L: { type: Boolean, default: false },
            XL: { type: Boolean, default: false },
            XXL: { type: Boolean, default: false }
        },
    },
    { timestamps: true }
);

export const productModel = mongoose.model('Product', productSchema);
