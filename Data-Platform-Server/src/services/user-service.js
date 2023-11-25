const { User } = require("../models");

class UserService {
  /**
   * Create a new user.
   * @param {Object} userData - User data to be saved in the database.
   * @returns {Promise<Object>} - The created user.
   */
  static async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }
}

module.exports = UserService;
