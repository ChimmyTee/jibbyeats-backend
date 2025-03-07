import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Successfully connected to the JibbyEatsDB"));


const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "health OK" });
});



app.listen(7000, () => {
    console.log("Server started on localhost:7000")
});