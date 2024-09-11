/*
This demonstration will help you understand how to work with HTTP headers when building APIs using Express.js and Node.js. 
It's an essential skill for handling various aspects of client-server communication.

Demo: Working with HTTP Headers

Step 1: Project Setup

If you haven't already, set up your project as described earlier.

Step 2: Create the Express Server

Create a file named app.js in your project directory.

Step 3: Handle HTTP Headers

In the app.js file, add the following code to create an API endpoint that demonstrates working with HTTP headers.
*/
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Parse JSON requests

app.get('/headers', (req, res) => {
  // Get a specific header value
  const userAgent = req.get('user-agent');

  // Set custom response headers
  res.set('X-Custom-Header', 'Hello from Custom Header');

  res.json({ userAgent });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
Step 4: Start the Server

Run your Express server by executing the following command in your terminal:
node app.js

*/
/*
Step 5: Testing the API

You can test the API using a web browser, a tool like curl, or Postman.

Using a Web Browser:
Open your web browser and navigate to http://localhost:3000/headers. 
You should see a JSON response containing the user-agent header value and the custom response header.

Using curl:
Open a new terminal window and execute the following command:
curl http://localhost:3000/headers

You'll receive the JSON response with the header information.
*/
/* more testing:

Using Postman:
Open Postman, create a new request, and set the URL to http://localhost:3000/headers. 
Send the request and observe the response.

Key Points:

The req.get('header-name') method is used to retrieve specific header values from the request.
The res.set('header-name', 'header-value') method is used to set custom response headers.

*/

/* note:

To test the custom response headers set using the res.set('header-name', 'header-value') method, 
you can use tools like curl or Postman. Here's how you can do it:

Using curl:

Open a terminal window and execute the following command:
curl -i http://localhost:3000/headers

The -i flag tells curl to include the response headers in the output. This will show you the headers set in the response. Look for the custom header you set using res.set().

Using Postman:

Open Postman.
Create a new request and set the URL to http://localhost:3000/headers.
Send the request.
In the response, you will see the headers section. This section will include the custom response header you set.
*/
