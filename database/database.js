import mongoose from "mongoose";

mongoose.set('strictQuery', true);

export const connectDB = async () => {
    const url = "mongodb+srv://bartkoa:EnBhXkHYu9QeaQi4@cluster0.lrqgsxo.mongodb.net/";
    try {
        const connection = await mongoose.connect(url);
        console.log("Database connected successfully");
    } catch (e) {
        console.log("Failed to connect database:", e);
    }
};
