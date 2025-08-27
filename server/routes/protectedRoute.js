import express from "express";
import { authUser } from "../middlewares/authMiddleware.js";


const router = express.Router();

router.get("/profile", authUser, (req, res) => {
    res.json({ msg: "welcome to Profile", user: req.authanticatedUser })
})


export default router;