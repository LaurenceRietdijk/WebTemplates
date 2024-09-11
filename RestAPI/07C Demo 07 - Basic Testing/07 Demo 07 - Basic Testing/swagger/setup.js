/*
Swagger is a tool used to design, document, and test APIs. Swagger UI, a component of the Swagger suite, 
provides an interactive web-based interface that allows you to explore and test your API endpoints. 
It generates a user-friendly documentation interface from your API specifications.

To demonstrate how Swagger UI works, let's consider a scenario where you have an 
Express.js API that manages items, similar to the previous examples. 
We'll use the swagger-jsdoc library to generate Swagger specifications and swagger-ui-express to 
serve the Swagger UI.

how you can set up Swagger UI for your API:

1) Install the necessary dependencies:
*/
npm install express swagger-jsdoc swagger-ui-express
/*
Create an Express app with Swagger UI integration:
*/
const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
const PORT = 3000;

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Item API',
    version: '1.0.0',
    description: 'API for managing items',
  },
  servers: [{ url: `http://localhost:${PORT}` }],
};

// Options for the Swagger UI setup
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to the API route files
};

// Initialize Swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
