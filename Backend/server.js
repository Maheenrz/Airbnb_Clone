import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import listings from './routes/listings.js';
import cors from 'cors';

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', listings);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));