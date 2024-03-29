import express from "express";
import bodyParser from "body-parser";
import monsters from "./routes/monster.route.js";
import { connectDB } from "./database/database.js";

const app = express();
const port = 3000;

connectDB();

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));



// routes
app.use("/monsters", monsters);

app.listen(port, function () {
    console.log(`🚀 Fire app listening on port ${port}!`);
});