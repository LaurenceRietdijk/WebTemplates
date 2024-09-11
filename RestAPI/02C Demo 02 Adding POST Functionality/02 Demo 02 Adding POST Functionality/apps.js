const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Parse JSON requests

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const newItem = req.body; // Assuming the request body contains the new item data
  newItem.id = items.length + 1; // Assign a new ID
  items.push(newItem);
  res.status(201).json(newItem); // Return the new item with a "Created" status
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// refer to file howitworks.js
