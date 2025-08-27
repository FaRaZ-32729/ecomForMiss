import React, { useEffect, useState } from 'react';
import Title from '../../components/Title';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const API_URL = import.meta.env.VITE_Node_Api_Url;

const UpdateProduct = () => {
    const { id } = useParams(); // Get product id from route params
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [inputs, setInputs] = useState({
        name: '',
        smallDescription: '',
        detail: '',
        starRating: 0,
        reviews: 0,
        category: '',
        sizes: {
            S: false,
            M: false,
            L: false,
            XL: false,
            XXL: false,
        },
    });

    // Fetch existing product data
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`${API_URL}/products/${id}`);
                console.log(res)
                const product = res.data.singleProduct;
                console.log(product.sizes)
                setInputs({
                    name: product.name,
                    smallDescription: product.smallDescription,
                    detail: product.detail,
                    starRating: product.starRating,
                    reviews: product.reviews,
                    category: product.category,
                    sizes: product.sizes,
                    imageUrl: product.imageUrl
                });
            } catch (error) {
                toast.error('Failed to load product data.');
            }
        };
        fetchProduct();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', inputs.name);
            formData.append('smallDescription', inputs.smallDescription);
            formData.append('detail', inputs.detail);
            formData.append('starRating', inputs.starRating);
            formData.append('reviews', inputs.reviews);
            formData.append('category', inputs.category);
            formData.append('sizes', JSON.stringify(inputs.sizes));
            if (image) formData.append('image', image); // optional image

            const response = await axios.put(`${API_URL}/products/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            toast.success(response.data.msg, {
                onClose: () => {
                    navigate('/admin/all-products');
                },
                autoClose: 500
            });
            // toast.success(response.data.msg);
            // navigate('/admin/all-products');
        } catch (error) {
            toast.error(error.response?.data?.msg || "Error updating product");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Title align="left" title="Update Product" subTitle="Edit the product details" />

                {/* Image Upload */}
                <p className='text-gray-800 mt-10'>Product Image</p>
                <div className='my-2'>
                    <label htmlFor="productImage">
                        <img
                            className='h-32 w-32 object-contain border border-gray-300 rounded cursor-pointer'
                            src={
                                image
                                    ? URL.createObjectURL(image)
                                    : `${API_URL}${inputs.imageUrl || '/images/default.png'}`
                            }
                            alt="Upload"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            id="productImage"
                            hidden
                            onChange={e => setImage(e.target.files[0])}
                        />
                    </label>
                </div>

                {/* Form Fields (same as AddProduct) */}
                {[
                    { label: 'Product Name', value: inputs.name, key: 'name', type: 'text' },
                    { label: 'Small Description', value: inputs.smallDescription, key: 'smallDescription', type: 'text' },
                    { label: 'Detailed Description', value: inputs.detail, key: 'detail', type: 'textarea' },
                    { label: 'Star Rating (out of 5)', value: inputs.starRating, key: 'starRating', type: 'number' },
                    { label: 'Reviews (Number)', value: inputs.reviews, key: 'reviews', type: 'number' },
                    { label: 'Category', value: inputs.category, key: 'category', type: 'text' },
                ].map(({ label, value, key, type }) => (
                    <div key={key} className="mt-4">
                        <p className="text-gray-800">{label}</p>
                        {type === 'textarea' ? (
                            <textarea
                                rows={4}
                                className="border border-gray-300 rounded p-2 w-full mt-1"
                                value={value}
                                onChange={e => setInputs({ ...inputs, [key]: e.target.value })}
                            />
                        ) : (
                            <input
                                type={type}
                                className="border border-gray-300 rounded p-2 w-full mt-1"
                                value={value}
                                onChange={e => setInputs({ ...inputs, [key]: e.target.value })}
                            />
                        )}
                    </div>
                ))}

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

                <button type="submit" className='bg-green-600 text-white px-8 py-2 rounded mt-8 mb-20 cursor-pointer'>
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default UpdateProduct;
