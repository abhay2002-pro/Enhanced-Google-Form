const { Form } = require("../models");

class FormService {
  /**
   * Create a new form.
   * @param {Object} formData - Form data to be saved in the database.
   * @returns {Promise<Object>} - The created form.
   */
  static async createForm(formData) {
    const form = new Form(formData);
    return await form.save();
  }
}

module.exports = FormService;
