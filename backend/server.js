// backend/server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const yatraRoutes = require('./routes/yatra');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/yatra', yatraRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Yatra API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
