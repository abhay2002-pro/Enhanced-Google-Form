const { StatusCodes } = require('http-status-codes');
const { CompanyServices } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * Create a new company.
 * 
 * POST : /companies
 * req.body {companyName: 'Atlan', formMetadata: 'Atlan is an active metadata platform for modern data teams, that helps them discover, understand, trust, and collaborate on data assets.'}
 */
async function createCompany(req, res) {
    try {
        const company = await CompanyServices.createCompany({
            companyName: req.body.companyName,
            companyMetadata: req.body.companyMetadata
        });
        SuccessResponse.data = company;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Error creating company.";
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    }
}


module.exports = {
    createCompany,
};
