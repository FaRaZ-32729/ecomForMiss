import mongoose from "mongoose";

const db_Connection = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("Connection Created Successfully"));
        await mongoose.connect(`${process.env.MONGODB_CONNECTION_STRING}/eccomDB`);
    } catch (error) {
        console.log(error.message);
    }
}

export default db_Connection;