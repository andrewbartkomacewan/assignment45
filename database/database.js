import mongoose from "mongoose";

mongoose.set('strictQuery', true);

export const connectDB = async () => {
    const username = "bartkoa";
    const password = "EnBhXkHYu9QeaQi4";
    const clusterName = "cluster0.lrqgsxo.mongodb.net";
    const dbName = "cmpt315";
    const collection = "Monsters";

    const url = `mongodb+srv://${username}:${password}@${clusterName}/${dbName}/${collection}?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database connected successfully");
    } catch (e) {
        console.log("Failed to connect database:", e);
    }
};
