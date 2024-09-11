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
