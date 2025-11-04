import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import foodRoute from "./route/Food_Items.route.js";
import restaurantsRoute from "./route/Restaurants.route.js";
import userRouter from "./route/User.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

app.use("/food", foodRoute);
app.use("/restaurant", restaurantsRoute);
app.use("/user", userRouter);

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("✅ Database connected successfully");

    app.listen(PORT, "0.0.0.0", () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  } catch (err) {
    console.error("❌ Failed to connect:", err.message);
    process.exit(1);
  }
};

connectDB();