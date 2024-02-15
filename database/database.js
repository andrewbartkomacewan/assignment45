import mongoose from "mongoose";

mongoose.set('strictQuery', true);

export const connectDB = async () => {
    const username = "bartkoa";
    const password = "EnBhXkHYu9QeaQi4";
    const clusterName = "cluster0.lrqgsxo.mongodb.net";
    const dbName = "cmpt315";
    const collectionName = "Monsters"; // Changed variable name to avoid confusion

    const url = `mongodb+srv://${username}:${password}@${clusterName}/${dbName}?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database connected successfully");

        // Select the Monsters collection
        const db = mongoose.connection;
        const Monsters = db.collection(collectionName);


    } catch (e) {
        console.log("Failed to connect database:", e);
    }
};

