import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import studentRoutes from "./routes/studentRoutes";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

// IMPORTANT
app.use(express.json());

app.use("/api", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});