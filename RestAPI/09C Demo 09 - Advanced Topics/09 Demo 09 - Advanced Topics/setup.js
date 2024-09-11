/*
Authentication: The authenticate middleware checks the username and password headers of incoming 
requests and authenticates the user based on the simulated user data. You can replace this with a 
proper authentication strategy like JWT or OAuth.

Pagination: The /items endpoint supports pagination using query parameters. 
The page parameter specifies the current page number, and the perPage parameter specifies the number of 
items to display per page. The logic calculates the correct range of items to display based on these 
parameters.

Query Parameters: The /users endpoint demonstrates the use of query parameters for filtering users. 
The username parameter is used to filter users based on the provided username.

Example of how you might implement authentication, pagination, and query parameters in a more advanced API:
*/

/*
to run the script:

install: npm install express body-parser
run the script: node apps.js
test the script:
1. Authentication: (use CMD NOT Powershell)
    curl -H "username: user1" -H "password: password1" http://localhost:3000/users
    curl -H "username: userx" -H "password: passwordx" http://localhost:3000/users

2. Pagination:

    curl http://localhost:3000/items?page=2&perPage=2



*/
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
