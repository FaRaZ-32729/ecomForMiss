import express from "express";
import { deleteUser, getAllUsers, getSingleUser, registerUser, updateUser, updateUserStatus } from "../controllers/userController.js";

const router = express.Router();

router.post("/", registerUser);
router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.patch("/:id/status", updateUserStatus);
export default router;