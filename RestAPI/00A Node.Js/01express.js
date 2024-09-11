const express = require('express');
const app = express();
const port = 3000;

// Middleware for logging incoming requests
app.use((req, res, next) => {
  console.log(`Request received for ${req.url}`);
  next();
});

// Route to handle GET requests at the root URL
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Route to handle GET requests at /about
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle 404 (Not Found) errors
app.use((req, res, next) => {
  res.status(404).send('404 - Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
