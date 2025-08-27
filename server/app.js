import userRouter from "./routes/userRoute.js"
import authRouter from './routes/authRoute.js'
import productRouter from './routes/productRoute.js'
import profile from './routes/protectedRoute.js'
import cors from 'cors'
import express from "express";
import cookieparser from 'cookie-parser'
import "dotenv/config";
import db_Connection from "./db_Connection_String/db_Connection.js";



const port = process.env.PORT || 3000;
const app = express();
db_Connection();

//middleWares
app.use(express.json());
app.use(cookieparser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


//Routes
app.use("/images", express.static("images"));
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/api", profile);


//prot
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});