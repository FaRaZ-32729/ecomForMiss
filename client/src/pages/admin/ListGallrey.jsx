import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../../components/Title";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const ListGallrey = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchImages = async () => {
        try {
            const res = await axios.get(`${API_URL}/gallrey`);
            setImages(res.data.images || []);
        } catch (error) {
            console.error("Error fetching images", error);
            toast.error("Failed to load images");
        } finally {
            setLoading(false);
        }
    };

    const deleteImage = async (id) => {
        try {
            await axios.delete(`${API_URL}/gallrey/${id}`);
            setImages(images.filter((img) => img._id !== id));
            toast.success("Image deleted successfully");
        } catch (error) {
            console.error("Error deleting image", error);
            toast.error("Failed to delete image");
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div>
            <Title align="left" title="Gallery Images" subTitle="Here you can see and delete gallery images" />

            <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 text-gray-800 font-medium">Name</th>
                            <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">Image</th>
                            <th className="py-3 px-4 text-gray-800 font-medium text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {loading ? (
                            <tr>
                                <td colSpan={3} className="text-center py-4 text-gray-600">Loading...</td>
                            </tr>
                        ) : images.length === 0 ? (
                            <tr>
                                <td colSpan={3} className="text-center py-4 text-gray-600">No Images Found</td>
                            </tr>
                        ) : (
                            images.map((img) => (
                                <tr key={img._id}>
                                    {/* Name */}
                                    <td className="py-3 px-4 text-gray-700 border-t border-gray-300">{img.name}</td>

                                    {/* Image */}
                                    <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                                        <img
                                            src={`${API_URL}${img.imageUrl}`}
                                            alt={img.name}
                                            className="h-12 w-12 object-cover rounded"
                                        />
                                    </td>

                                    {/* Actions */}
                                    <td className="py-3 px-4 border-t border-gray-300 text-sm text-center">
                                        <button
                                            onClick={() => deleteImage(img._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListGallrey;
