const express = require('express');
const router = express.Router();
const connectDB = require('../config/db');
const Blog = require('../models/blog');
const { debug } = require('console');

// handles new blogs being sent
router.post('/', (req, res) => { 
    res.send("recieved blog");
});

//handles request all blogs
router.get('/', async (req, res) => { 
    //res.send("requested all blogs");
    try {
        const items = await Blog.find();
        res.send(items);
    } catch (error) {
        console.log(error);
        res.status(500).send('server Error');
    }
});

// handles blog requests
router.get('/:id', async (req, res) => {
    const val = req.params.id;
    //res.send(`requested blog id: ${val}`);
    try {
        const item = await Blog.findById(val);
        if (item)
        {
            res.send(item);
        } else {
            res.status(404).json({ msg: 'Item not found' });
        }
    } catch (error) {
        debug.log(error);
        if (error.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Item not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;