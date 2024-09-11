const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const PORT = 3001;

// Use the cors middleware to enable CORS
app.use(cors());

app.use(express.json()); // Parse JSON requests

const items = [
  { id: 1, name: 'Item 1', cost:23 , category: "A"},
  { id: 2, name: 'Item 2', cost:25 , category: "B"},
  { id: 3, name: 'Item 3', cost:26 , category: "C"},
  { id: 4, name: 'Item 4', cost:28 , category: "E"},
];

app.get('/items', (req, res) => {
  console.log('GET /items');
  res.status(200).json(items); // Set the status code to 200 (OK)
});

app.post('/items', (req, res) => {
  const newItem = req.body;
  if (!newItem.name) {
    return res.status(400).json({ error: 'Item name is required' });
  }

  newItem.id = items.length + 1;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  const itemToUpdate = items.find(item => item.id === itemId);
  if (!itemToUpdate) {
    return res.status(404).json({ error: 'Item not found' });
  }

  itemToUpdate.name = updatedItem.name;
  itemToUpdate.cost = updatedItem.cost;
  itemToUpdate.category = updatedItem.category;
  res.json(itemToUpdate);
  console.log(itemToUpdate)
});

app.patch('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedFields = req.body;

  const itemToUpdate = items.find(item => item.id === itemId);
  if (!itemToUpdate) {
    return res.status(404).json({ error: 'Item not found' });
  }

  Object.assign(itemToUpdate, updatedFields);
  res.json(itemToUpdate);
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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
