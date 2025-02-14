const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const listings = require('./routes/listings');
const users = require('./routes/users');
const bookings = require('./routes/bookings');
require('./models/review'); // Import the Review model

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
// CORS Middleware
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

app.use('/api/listings', listings);
app.use('/api/users', users);
app.use('/api/bookings', bookings);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});