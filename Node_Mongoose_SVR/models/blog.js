const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    _id: {
        type: String, // Assuming the ID is a string like "456xyz"
        required: true,
    },
    title: {
        type: String, // The title of the document
        required: true,
    },
    body: {
        type: String, // The main content or paragraph
        required: true,
    },
    dateCreated: {
        type: String, // Date created in "DD-MM-YYYY" format
        required: true,
    },
    timeStamp: {
        type: String, // Time in "HH:mm" format
        required: true,
    },
    creator: {
        type: String, // Assuming creator ID is a string like "123abc"
        required: true,
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;