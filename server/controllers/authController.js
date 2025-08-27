import { userModel } from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const logInUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) return res.status(404).json({ msg: "User Not Found" });

        const matchedPass = await bcrypt.compare(password, existingUser.password);
        if (!matchedPass) return res.status(400).json({ msg: "Invalid Credantials" });

        const token = jwt.sign(
            { _id: existingUser._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        )

        res.cookie("token", token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict"
        });

        return res.status(200).json({ msg: "Login Successfull", existingUser });
    } catch (error) {
        return res.status(500).json({ msg: "error occured while loging user" });
    }
}



export const logOutUser = async (req, res) => {
    try {
        res.clearCookie("token", { httpOnly: true, sameSite: "strict" })
        return res.status(200).json({ msg: "Logout Successfull" });
    } catch (error) {
        return res.status(500).json({ msg: "error occered while logout" });
    }
}