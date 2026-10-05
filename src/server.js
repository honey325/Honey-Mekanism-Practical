
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routers/index.js";

dotenv.config();
const port = process.env.PORT || 8000;

const app = express()
app.use(express.json());
app.use(cors());

app.use("/",router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});