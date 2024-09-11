const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Simulated user data (for demonstration purposes)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
  // ...
];

// Middleware to authenticate requests
function authenticate(req, res, next) {
  const { username, password } = req.headers;
  const user = users.find(u => u.username === username && u.password === password);
  
  if (!user) {
    return res.status(401).json({ error: 'Authentication failed' });
  }
  
  req.user = user;
  next();
}

app.get('/items', (req, res) => {
  // Pagination parameters
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  
  // Simulated data for demonstration
  const allItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 1' },
    { id: 4, name: 'Item 2' },
    { id: 5, name: 'Item 1' },
    { id: 6, name: 'Item 2' },
    { id: 7, name: 'Item 1' },
    { id: 8, name: 'Item 2' },
    { id: 9, name: 'Item 1' },
    { id: 10, name: 'Item 2' },
    { id: 11, name: 'Item 1' },
    { id: 12, name: 'Item 2' },
    { id: 13, name: 'Item 1' },
    { id: 14, name: 'Item 2' },
    { id: 15, name: 'Item 1' },
    { id: 16, name: 'Item 2' },
    { id: 17, name: 'Item 1' },
    { id: 18, name: 'Item 2' },
    { id: 19, name: 'Item 1' },
    { id: 20, name: 'Item 2' },
    { id: 21, name: 'Item 1' },
    { id: 22, name: 'Item 2' },
    { id: 23, name: 'Item 1' },
    { id: 24, name: 'Item 2' },
    
    // ...
  ];
  
  // Pagination logic
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const itemsOnPage = allItems.slice(startIndex, endIndex);
  
  res.json(itemsOnPage);
});

app.get('/users', authenticate, (req, res) => {
  // Query parameters for filtering users
  const { username } = req.query;
  
  // Filter users based on query parameters
  const filteredUsers = users.filter(user => !username || user.username === username);
  
  res.json(filteredUsers);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
