import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { fileURLToPath } from 'url';
import path from "path";

// app config
const app = express();
const PORT = process.env.PORT || 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());
app.use(cors({
    origin: 'https://food-delivery-jp.netlify.app', // Replace with your Netlify URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get("/", (req, res) => {
    res.send("API Working");
});
app.get('/keep-alive', (req, res) => {
    res.status(200).send('Backend is alive');
  });
  
// Handle any other requests by serving the frontend's index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
