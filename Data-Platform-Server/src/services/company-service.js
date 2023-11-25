const { Company } = require("../models");

class CompanyService {
  /**
   * Create a new company.
   * @param {Object} companyData - Company data to be saved in the database.
   * @returns {Promise<Object>} - The created company.
   */
  static async createCompany(companyData) {
    const company = new Company(companyData);
    return await company.save();
  }

}

module.exports = CompanyService;
