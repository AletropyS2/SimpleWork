import { config } from "dotenv"
import express from "express";
import MainRoutes from "./Routes/MainRoutes";


config(); // Load .env file if exists

// Initializing application
const PORT = process.env.PORT || 3000;
const app = express();

MainRoutes(app); // Load routes

app.listen(PORT, () => {
    console.clear();
    console.log(`Server is running at http://localhost:${PORT}`);
});