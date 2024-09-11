const express = require('express');
const NodeCache = require('node-cache');
const app = express();
const PORT = 3000;

// Initialize a cache instance with a default expiration time
const cache = new NodeCache({ stdTTL: 3600 }); // 1 hour

app.get('/items', (req, res) => {
  // Check if data is already cached
  const cachedData = cache.get('items');

  if (cachedData) {
    console.log('Serving from cache');
    return res.json(cachedData);
  }

  // Fetch data from the database or API
  const fetchedData = /* Fetch data from source */;

  // Store the fetched data in the cache
  cache.set('items', fetchedData);

  res.json(fetchedData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
