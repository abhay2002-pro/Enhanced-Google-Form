const { Response } = require("../models");

class ResponseService {
  /**
   * Create a new response.
   * @param {Object} responseData - Response data to be saved in the database.
   * @returns {Promise<Object>} - The created response.
   */
  static async createResponse(responseData) {
    const response = new Response(responseData);
    return await response.save();
  }
}

module.exports = ResponseService;
