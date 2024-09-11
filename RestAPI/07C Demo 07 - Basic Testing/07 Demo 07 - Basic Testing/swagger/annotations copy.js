/**
 * Common Swagger annotations for API routes.
 */

/**
 * Swagger annotation for a successful response.
 */
exports.successResponse = {
    200: {
      description: 'Successful response'
    }
  };
  
  /**
   * Swagger annotation for an error response.
   * @param {number} statusCode - The HTTP status code for the error response.
   * @param {string} description - The description of the error response.
   */
  exports.errorResponse = (statusCode, description) => ({
    [statusCode]: {
      description
    }
  });
  
  
/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get a list of items
 *     responses:
 *       ...annotations.successResponse
 
 *   post:
 *     summary: Add a new item
 *     parameters:
 *       - name: item
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Item' // Reference to the item schema definition
 *     responses:
 *       ...annotations.successResponse(201)
 
 *   put:
 *     summary: Update an item
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the item to update
 *       - name: item
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Item'  // Reference to the item schema definition
 *     responses:
 *       ...annotations.successResponse
 *       ...annotations.errorResponse(404, 'Item not found')

 *   patch:
 *     summary: Partially update an item
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the item to update
 *       - name: item
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Item'  // Reference to the item schema definition
 *     responses:
 *       ...annotations.successResponse
 *       ...annotations.errorResponse(404, 'Item not found')

 *   delete:
 *     summary: Delete an item
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the item to delete
 *     responses:
 *       ...annotations.successResponse
 *       ...annotations.errorResponse(404, 'Item not found')
 */
