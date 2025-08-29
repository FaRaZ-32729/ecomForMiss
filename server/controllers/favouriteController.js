import { favouriteModel } from "../models/favouriteModel.js"
import { imageModel } from "../models/gallreyModel.js"

// ➕ Add to Favourite
export const addFavourite = async (req, res) => {
    try {
        const userId = req.authanticatedUser?._id;
        // console.log(userId)
        const { galleryId } = req.body;

        // check if gallery exists
        const galleryItem = await imageModel.findById(galleryId);
        if (!galleryItem) {
            return res.status(404).json({ message: "Gallery item not found" });
        }

        // check if already added
        const exists = await favouriteModel.findOne({ user: userId, galleryItem: galleryId });
        if (exists) {
            return res.status(400).json({ message: "Already in favourites" });
        }

        const fav = await favouriteModel.create({ user: userId, galleryItem: galleryId });
        res.status(201).json({ message: "Added to favourites", fav });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getFavourites = async (req, res) => {
    try {
        const userId = req.authanticatedUser?._id;

        const favourites = await favouriteModel.find({ user: userId }).populate("galleryItem");
        res.status(200).json({ favourites });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const removeFavourite = async (req, res) => {
    try {
        const userId = req.authanticatedUser?._id;
        const { favId } = req.params;

        const fav = await favouriteModel.findOneAndDelete({ _id: favId, user: userId });
        if (!fav) {
            return res.status(404).json({ message: "Favourite not found" });
        }

        res.status(200).json({ message: "Removed from favourites" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
