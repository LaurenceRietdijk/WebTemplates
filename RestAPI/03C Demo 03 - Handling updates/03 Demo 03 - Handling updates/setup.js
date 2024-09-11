/*
Demo 3: Handling Updates in your Express.js API.

Step 1: Project Setup

Ensure that your project is set up as described earlier.

Step 2: Create the Express Server

You should already have an apps.js file from previous demonstrations. Make sure you've included the necessary dependencies and set up the Express server.

Step 3: Handling Updates

In the app.js file, after creating the GET /items and POST /items endpoints, you can add the code to handle updating existing items using a PUT request.

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

/*
Step 4: Testing the Update Endpoint

Using curl:
Open a new terminal window and execute the following command to send a PUT request with 
JSON data to update an item:


// curl -X PUT -H "Content-Type: application/json" -d "{\"name\": \"Updated Item\"}" http://localhost:3000/items/1
This will update the name of the item with ID 1 to "Updated Item".

Using Postman:

Create a new request in Postman:

Set the request type to PUT.
Set the URL to http://localhost:3000/items/1 (replace 1 with the desired item ID).

In the Body section, select the "raw" option and enter JSON data like 
{"name": "New Item rplace old item"}.

Send the request and observe the response.

Step 5: Verify the Update

After sending the PUT request, you can retrieve the list of items using a GET request to verify that 
the item has been updated.

*/
