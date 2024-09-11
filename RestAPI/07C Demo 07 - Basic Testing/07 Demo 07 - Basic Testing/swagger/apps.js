const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Parse JSON requests

const items = [
  { id: 1, name: 'Item 1', cost:23 , category: "A"},
  { id: 2, name: 'Item 2', cost:25 , category: "B"},
  { id: 3, name: 'Item 3', cost:26 , category: "C"},
  { id: 4, name: 'Item 4', cost:28 , category: "E"},
];

const annotations = require('./annotations'); // Import the annotation module

/**
 * Common Swagger annotations for API routes.
 */

/**
 * Swagger annotation for a successful response.
 */
exports.successResponse = {
    200: {
      description: 'Successful response'
    }
  };
  
  /**
   * Swagger annotation for an error response.
   * @param {number} statusCode - The HTTP status code for the error response.
   * @param {string} description - The description of the error response.
   */
  exports.errorResponse = (statusCode, description) => ({
    [statusCode]: {
      description
    }
  });
  
/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get a list of items
 *     responses:
 *       200:
 *         description: Successful response
 *   post:
 *     summary: Create a new item
 *     parameters:
 *       - in: body
 *         name: item
 *         description: The item to create
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             cost:
 *               type: number
 *             category:
 *               type: string
 *     responses:
 *       201:
 *         description: Successful response
 * 
 * /items/{id}:
 *   put:
 *     summary: Update an existing item
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the item to update
 *         required: true
 *         type: integer
 *       - in: body
 *         name: item
 *         description: Updated item data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             cost:
 *               type: number
 *             category:
 *               type: string
 *     responses:
 *       200:
 *         description: Successful response
 * 
 *   patch:
 *     summary: Update specific fields of an item
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the item to update
 *         required: true
 *         type: integer
 *       - in: body
 *         name: item
 *         description: Fields to update in the item
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             cost:
 *               type: number
 *             category:
 *               type: string
 *     responses:
 *       200:
 *         description: Successful response
 * 
 *   delete:
 *     summary: Delete an item
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the item to delete
 *         required: true
 *         type: integer
 *     responses:
 *       204:
 *         description: Successful response
 */

// Your existing code for Express routes and other functionality


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

/*
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

*/
// for testing purposes you shoud export 

module.exports = app; // Export the app object