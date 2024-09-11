const mongoose = require('mongoose');

// Define the schema
const EventSchema = new mongoose.Schema(
    {
        title: {
            type: String, 
            required: true,
        },
        description: {
            type: String, 
            required: true,
        },
        date: {
            type: String, 
            required: true,
        }
    },
    { timestamps: true }
    
);

// Create a model based on the schema
const Event = mongoose.model('Event', EventSchema);

module.exports = Event;