import dotenv from 'dotenv';
import express from 'express';
import mongoose from "mongoose";


const app = express();
dotenv.config();

const PORT = process.env.PORT || 5500

const start = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL)
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    });
  } catch (err) {
    console.error(err);
  }
}

start();
