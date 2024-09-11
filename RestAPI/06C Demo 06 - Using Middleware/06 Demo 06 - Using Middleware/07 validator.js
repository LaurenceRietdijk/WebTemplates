const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/users', [
  // Validate email format and not empty
  body('email').isEmail().notEmpty(),

  // Validate password length
  body('password').isLength({ min: 6 }),

  // Other validation rules...
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Process valid data
  // ...
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
