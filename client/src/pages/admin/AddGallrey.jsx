import React, { useState } from 'react';
import Title from '../../components/Title';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_Node_Api_Url;

const AddGallery = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !image) {
            toast.error("Please provide both image name and file.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('image', image);

            const response = await axios.post(`${API_URL}/gallrey`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            toast.success(response.data.message || "Image uploaded successfully!", {
                onClose: () => {
                    navigate('/admin/all-images');
                },
                autoClose: 500
            });

            setName('');
            setImage(null);
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Error uploading image");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Title align="left" title="Add Gallery Image" subTitle="Upload a new image to the gallery." />

                {/* Image Upload */}
                <p className='text-gray-800 mt-10'>Gallery Image</p>
                <div className='my-2'>
                    <label htmlFor="galleryImage">
                        <img
                            className='h-32 w-32 p-2 object-contain border border-gray-300 rounded cursor-pointer'
                            src={image ? URL.createObjectURL(image) : '/assets/upload.svg'}
                            alt="Upload"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            id="galleryImage"
                            required
                            hidden
                            onChange={e => setImage(e.target.files[0])}
                        />
                    </label>
                </div>

                {/* Image Name */}
                <div className="mt-6">
                    <p className="text-gray-800">Image Name</p>
                    <input
                        type="text"
                        placeholder="Enter image name"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <button type="submit" className='bg-blue-600 text-white px-8 py-2 rounded mt-8 mb-20 cursor-pointer'>
                    Add Image
                </button>
            </form>
        </div>
    );
};

export default AddGallery;
