const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.send('Port route is working!');
});

router.get('/:id', (req, res) => {
    const itemId = req.params.id; // Extracts the value at the end of the URI
    const MSG = `you said: ${itemId}`;
    res.send(MSG);
});

module.exports = router;