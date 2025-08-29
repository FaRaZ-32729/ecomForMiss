import express from "express"
import { authUser } from "../middlewares/authMiddleware.js";
import { addFavourite, getFavourites, removeFavourite } from "../controllers/favouriteController.js";
const router = express.Router();


router.post("/favourites", authUser, addFavourite);
router.get("/favourites", authUser, getFavourites);
router.delete("/favourites/:favId", authUser, removeFavourite);

export default router;
