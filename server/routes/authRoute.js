import express from 'express'
import { logInUser, logOutUser } from '../controllers/authController.js';

const router = express.Router();

router.post("/", logInUser);
router.delete("/logout", logOutUser);

export default router;