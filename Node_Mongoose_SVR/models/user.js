const mongoose = require('mongoose');

// Define the schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
    },
    password: {
        type: String, 
        required: true,
    }
});

// Create a model based on the schema
const User = mongoose.model('User', UserSchema);

module.exports = User;