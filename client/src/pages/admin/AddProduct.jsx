import React, { useState } from 'react';
import Title from '../../components/Title';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const URl = import.meta.env.VITE_Node_Api_Url;

const AddProduct = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [inputs, setInputs] = useState({
        name: '',
        smallDescription: '',
        detail: '',
        starRating: 0,
        reviews: 0,
        price: 0,
        category: '',
        sizes: {
            S: false,
            M: false,
            L: false,
            XL: false,
            XXL: false,
        },
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', inputs.name);
            formData.append('smallDescription', inputs.smallDescription);
            formData.append('detail', inputs.detail);
            formData.append('starRating', inputs.starRating);
            formData.append('reviews', inputs.reviews);
            formData.append('price', inputs.price);
            formData.append('category', inputs.category);
            formData.append('image', image);
            formData.append('sizes', JSON.stringify(inputs.sizes));

            const response = await axios.post(`${URl}/products/`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            toast.success(response.data.msg, {
                onClose: () => {
                    navigate('/admin/all-products');
                },
                autoClose: 500
            });

        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.msg || "Error adding product");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Title align="left" title="Add Product" subTitle="Start adding details to showcase your new clothing item." />

                {/* Image Upload */}
                <p className='text-gray-800 mt-10'>Product Image</p>
                <div className='my-2'>
                    <label htmlFor="productImage">
                        <img
                            className='h-32 w-32 object-contain border border-gray-300 rounded cursor-pointer'
                            src={image ? URL.createObjectURL(image) : 'https://via.placeholder.com/150?text=Upload'}
                            alt="Upload"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            id="productImage"
                            required
                            hidden
                            onChange={e => setImage(e.target.files[0])}
                        />
                    </label>
                </div>

                {/* Product Name */}
                <div className="mt-6">
                    <p className="text-gray-800">Product Name</p>
                    <input
                        type="text"
                        placeholder="Enter product name"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        required
                        value={inputs.name}
                        onChange={e => setInputs({ ...inputs, name: e.target.value })}
                    />
                </div>

                {/* Small Description */}
                <div className="mt-4">
                    <p className="text-gray-800">Small Description</p>
                    <input
                        type="text"
                        placeholder="Enter a short description"
                        required
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={inputs.smallDescription}
                        onChange={e => setInputs({ ...inputs, smallDescription: e.target.value })}
                    />
                </div>
                {/* price */}
                <div className="mt-4">
                    <p className="text-gray-800">Price</p>
                    <input
                        type="number"
                        required
                        placeholder="Enter product price"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={inputs.price}
                        onChange={e => setInputs({ ...inputs, price: e.target.value })}
                    />
                </div>

                {/* Detailed Description */}
                <div className="mt-4">
                    <p className="text-gray-800">Detailed Description</p>
                    <textarea
                        rows={4}
                        placeholder="Enter detailed description"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        required
                        value={inputs.detail}
                        onChange={e => setInputs({ ...inputs, detail: e.target.value })}
                    ></textarea>
                </div>

                {/* Star Rating */}
                <div className="mt-4">
                    <p className="text-gray-800">Star Rating (out of 5)</p>
                    <input
                        type="number"
                        min={0}
                        max={5}
                        placeholder="0"
                        className="border border-gray-300 rounded p-2 w-24 mt-1"
                        required
                        value={inputs.starRating}
                        onChange={e => setInputs({ ...inputs, starRating: e.target.value })}
                    />
                </div>

                {/* Reviews */}
                <div className="mt-4">
                    <p className="text-gray-800">Reviews (Number)</p>
                    <input
                        type="number"
                        placeholder="0"
                        required
                        className="border border-gray-300 rounded p-2 w-24 mt-1"
                        value={inputs.reviews}
                        onChange={e => setInputs({ ...inputs, reviews: e.target.value })}
                    />
                </div>

                {/* Category */}
                <div className="mt-4">
                    <p className="text-gray-800">Category</p>
                    <input
                        type="text"
                        placeholder="e.g., Men, Women, Kids"
                        required
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={inputs.category}
                        onChange={e => setInputs({ ...inputs, category: e.target.value })}
                    />
                </div>

                {/* Sizes */}
                <div className="mt-4">
                    <p className="text-gray-800">Available Sizes</p>
                    <div className="flex gap-4 flex-wrap text-gray-700 mt-1">
                        {Object.keys(inputs.sizes).map((size) => (
                            <label key={size} className="flex items-center gap-1">
                                <input
                                    type="checkbox"
                                    checked={inputs.sizes[size]}
                                    onChange={() =>
                                        setInputs({
                                            ...inputs,
                                            sizes: { ...inputs.sizes, [size]: !inputs.sizes[size] },
                                        })
                                    }
                                />
                                {size}
                            </label>
                        ))}
                    </div>
                </div>

                <button type="submit" className='bg-blue-600 text-white px-8 py-2 rounded mt-8 mb-20 cursor-pointer'>
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
