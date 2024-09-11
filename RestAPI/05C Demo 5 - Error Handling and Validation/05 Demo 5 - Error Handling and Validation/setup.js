/*
Demo 5: Error Handling and Validation in your Express.js API.

Step 1: Project Setup

Ensure your project is still set up with Express.js as described earlier.

Step 2: Create the Express Server

Make sure you have the app.js file with the Express server set up.

Step 3: Implementing Error Handling and Validation

In the app.js file, after creating the endpoints for GET, POST, PUT, and DELETE, you can add the code to implement error handling and basic validation for incoming data.

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
  // Code for handling POST requests with basic validation
  const newItem = req.body;

  if (!newItem.name) {
    return res.status(400).json({ error: 'Item name is required' });
  }

  newItem.id = items.length + 1;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
  // Code for handling PUT requests as demonstrated earlier
});

app.delete('/items/:id', (req, res) => {
  // Code for handling DELETE requests as demonstrated earlier
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
Step 4: Explanation of Error Handling and Validation

In the POST endpoint, you've added basic validation to ensure that the incoming 
data contains a valid item name. 
If the name is missing, a 400 Bad Request response is sent with an appropriate error message.
The app.use() middleware at the end handles unhandled errors. 
If any errors occur in the previous middleware functions, they will be caught by this middleware. 

Step 5: Testing Error Handling and Validation

Testing Validation:
Send a POST request with missing or empty item name to test validation:
 
curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"\"}" http://localhost:3000/items

You should receive a 400 Bad Request response with an error message.

Testing Error Handling:
Introduce an error by modifying the POST endpoint code to include a line like throw 
new Error('Something went wrong');. This will trigger the error handling middleware.

Step 6: Verify Error Handling

After introducing an error, send a request to the POST endpoint or any other endpoint to see the 
error handling in action. You should receive a 500 Internal Server Error response.

*/
