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

  /**
   * Get a form by ID.
   * @param {string} formId - The ID of the form to retrieve.
   * @returns {Promise<Object|null>} - The form object if found, or null if not found.
   */
  static async getFormById(formId) {
    return await Form.findById(formId);
  }
}

module.exports = FormService;
