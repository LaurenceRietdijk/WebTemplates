/*
Demo 4: Implementing DELETE functionality in your Express.js API.

*/
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
  // Code for handling GET requests as demonstrated earlier
});

app.post('/items', (req, res) => {
  // Code for handling POST requests as demonstrated earlier
});

app.put('/items/:id', (req, res) => {
  // Code for handling PUT requests as demonstrated earlier
});

app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);

  const itemIndex = items.findIndex(item => item.id === itemId);
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  items.splice(itemIndex, 1);
  res.status(204).send(); // No content in the response
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

