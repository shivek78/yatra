// backend/models/Yatra.js

const mongoose = require('mongoose');

const yatraSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // Add other yatra-related fields as needed
});

module.exports = mongoose.model('Yatra', yatraSchema);
