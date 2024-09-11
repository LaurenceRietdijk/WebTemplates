/*
Step 1: Project Setup

If you haven't already, make sure your project is set up as described earlier.

Step 2: Create the Express Server

You should already have an app.js file from earlier. 
Ensure that you've included the necessary dependencies and set up the Express server.

Step 3: Handling POST Requests and Adding Items

In the app.js file, after defining the items array and creating the GET /items endpoint, 
you can add the code to handle POST requests and add new items to the data store.
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
  const newItem = req.body; // Assuming the request body contains the new item data
  newItem.id = items.length + 1; // Assign a new ID
  items.push(newItem);
  res.status(201).json(newItem); // Return the new item with a "Created" status
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
Step 4: Testing the POST Endpoint

Using curl:
Open a new terminal window and execute the following command to send a POST request with JSON data:
*/


// curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"New Item\"}" http://localhost:3000/items

/*

This will add a new item with the name "New Item" to the data store.

Using Postman:
Create a new request in Postman:

Set the request type to POST.
Set the URL to http://localhost:3000/items.
In the Body section, select the "raw" option and enter JSON data like {"name": "New Item"}.
Send the request and observe the response.
Using a Web Browser:
While web browsers are primarily used for GET requests, you can use tools like Postman or curl to 
test POST requests effectively.

In this demonstration, you've added a new API endpoint that handles POST requests to add new items 
to the data store. This showcases how to handle data input from clients and modify the server-side 
data using Express.js and Node.js.

*/
