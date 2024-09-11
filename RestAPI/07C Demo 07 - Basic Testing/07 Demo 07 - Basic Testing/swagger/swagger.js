// swagger.js
const express = require('express');
const router = express.Router();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Your API Documentation',
      description: 'Documentation for your API endpoints',
      version: '1.0.0',
    },
  },
  apis: ['./apps.js'], // Specify the path to your main app file (apps.js)
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerSpec));

module.exports = router;
