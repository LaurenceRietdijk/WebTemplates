/* steip 1
mkdir c:\simple-api-demo
cd simple-api-demo

Initialize a new Node.js project and install Express.js as a dependency.

npm init -y
npm install express

Step 2: Create the Express Server

Create a file named app.js in your project directory. This will be the entry point for your application.
*/

const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* 
Step 3: Create the API Endpoint

In the app.js file, add the following code to create a simple API endpoint that returns a list of items.

*/
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  
  app.get('/items', (req, res) => {
    res.json(items);
  });

  /* final app.js will look like this */

const express = require('express');
const app = express();
const PORT = 3000;

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  
  app.get('/items', (req, res) => {
    res.json(items);
  });



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



/* run the app.js in terminal

node app.js

Step 5: Testing the API

You can test the API using a web browser or command-line tools like curl.

Using a Web Browser:
Open your web browser and navigate to http://localhost:3000/items. 
You should see a JSON response containing the list of items.

Using curl:
Open a new terminal window and execute the following command:

curl http://localhost:3000/items

>> You'll receive the JSON response containing the list of items.

*/