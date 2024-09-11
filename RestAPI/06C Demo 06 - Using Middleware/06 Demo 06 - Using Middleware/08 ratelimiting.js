const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const PORT = 3000;

// Apply rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max 100 requests per windowMs
});
app.use(limiter);

// Your routes and handlers...
// ...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
