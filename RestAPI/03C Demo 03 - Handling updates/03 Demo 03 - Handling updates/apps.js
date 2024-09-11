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
  // Code for handling POST requests as demonstrated earlier
});

app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  const itemToUpdate = items.find(item => item.id === itemId);
  if (!itemToUpdate) {
    return res.status(404).json({ error: 'Item not found' });
  }

  itemToUpdate.name = updatedItem.name;
  res.json(itemToUpdate);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
