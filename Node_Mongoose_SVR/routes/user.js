const express = require('express');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();



// login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

        const ismatch = await bcrypt.compare(password, user.password);

        if (!ismatch){
            return res.status(400).json({ erorr: "Invalid Credentials" });
        }
            
        const payload = {
            user: {
                _id: user._id
            }
        }

        const token = jwt.sign(payload, config.get('JWT_SECRET'), { expiresIn: '1hr' });

        res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});

// register
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        let user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ error: "user already exists" });
        }

        const hashedPsw = await bcrypt.hash(password, 12);

        user = new User({
            username,
            email,
            password: hashedPsw
        })

        const newUser = await user.save();

        const payload = {
            user: {
                _id: newUser._id
            }
        }

        const token = jwt.sign(payload, config.get('JWT_SECRET'), { expiresIn: '1hr' });
        
        res.status(201).json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Server Error1"})
    }
});


module.exports = router;