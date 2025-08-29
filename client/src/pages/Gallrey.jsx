import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const Gallrey = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState({});

    // Fetch gallery images
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await axios.get(`${API_URL}/gallrey`);
                setGalleryItems(res.data.images);
            } catch (error) {
                console.error("Error fetching gallery images:", error);
                toast.error("Failed to load gallery images");
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const res = await axios.get(`${API_URL}/favourite/favourites`, {
                    withCredentials: true,
                });
                const favMap = {};
                res.data.favourites.forEach((fav) => {
                    favMap[fav.galleryItem._id] = fav._id;
                });
                setFavorites(favMap);
            } catch (error) {
                console.error("Error fetching favourites:", error);
                toast.error("login to fetch favourites");
            }
        };

        fetchFavourites();
    }, []);

    const toggleFavorite = async (galleryId) => {
        try {
            if (favorites[galleryId]) {
                await axios.delete(`${API_URL}/favourite/favourites/${favorites[galleryId]}`, {
                    withCredentials: true,
                });

                setFavorites((prev) => {
                    const updated = { ...prev };
                    delete updated[galleryId];
                    return updated;
                });

                toast.info("Removed from favourites ");
            } else {
                const res = await axios.post(
                    `${API_URL}/favourite/favourites`,
                    { galleryId },
                    { withCredentials: true }
                );

                setFavorites((prev) => ({
                    ...prev,
                    [galleryId]: res.data.fav._id,
                }));

                toast.success("Added to favourites ");
            }
        } catch (error) {
            console.error("Error toggling favourite:", error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="bg-gray-100 lg:pt-24 pt-16">
            <div className="max-w-7xl mx-auto">
                {/* Hero Image */}
                <div>
                    <img
                        src="/assets/gallrey.png"
                        alt="Gallery Banner"
                        className="w-screen px-6 h-[300px] object-contain rounded-md"
                    />
                </div>

                {/* Gallery Section */}
                <div className="max-w-6xl mx-auto px-6 py-16 text-gray-700">
                    {loading ? (
                        <p className="text-center text-gray-600">Loading images...</p>
                    ) : galleryItems.length === 0 ? (
                        <p className="text-center text-gray-600">No images available.</p>
                    ) : (
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {galleryItems.map((item) => (
                                <div
                                    key={item._id}
                                    className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
                                >
                                    {/* Heart Icon */}
                                    <button
                                        onClick={() => toggleFavorite(item._id)}
                                        className="absolute top-3 right-3 text-2xl"
                                    >
                                        {favorites[item._id] ? (
                                            <img
                                                src="/assets/heartfill2.svg"
                                                alt="filled heart"
                                                className="w-6 h-6"
                                            />
                                        ) : (
                                            <img
                                                src="/assets/heart2.svg"
                                                alt="heart"
                                                className="w-6 h-6"
                                            />
                                        )}
                                    </button>

                                    <img
                                        src={`${API_URL}${item.imageUrl}`}
                                        alt={item.name}
                                        className="w-full h-64 object-contain"
                                    />
                                    <div className="p-4 text-center">
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallrey;
