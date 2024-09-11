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
  
  

