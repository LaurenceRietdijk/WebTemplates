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

