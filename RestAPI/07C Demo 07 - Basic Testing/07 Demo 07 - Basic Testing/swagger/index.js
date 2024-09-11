// index.js
const express = require('express');
const app = require('./apps'); // Import your main app configuration
const swaggerRouter = require('./swagger'); // Import the Swagger router
const PORT = 3000;

app.use(swaggerRouter); // Mount the Swagger router

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
