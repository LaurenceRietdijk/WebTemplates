/*
Demo 4: Implementing DELETE functionality in your Express.js API.

Step 1: Project Setup

Ensure your project is still set up with Express.js as described earlier.

Step 2: Create the Express Server

Make sure you have the app.js file with the Express server set up.

Step 3: Handling Deletions

In the apps.js file, after creating the endpoints for GET, POST, and PUT, you can add the code to
handle deleting items using a DELETE request.

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

/*
Step 4: Testing the Delete Endpoint

Using curl:
Open a new terminal window and execute the following command to send a DELETE request to remove 
an item:

curl -X DELETE http://localhost:3000/items/1

This will delete the item with ID 1.

Using Postman:
Create a new request in Postman:

Set the request type to DELETE.
Set the URL to http://localhost:3000/items/1 (replace 1 with the desired item ID).

Send the request.

Step 5: Verify the Deletion

After sending the DELETE request, you can retrieve the list of items using a GET request to verify 
that the item has been removed.
*/



