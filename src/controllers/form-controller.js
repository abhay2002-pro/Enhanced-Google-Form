const { StatusCodes } = require('http-status-codes');
const { FormServices } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * Create a new form.
 * 
 * POST : /forms
 * req.body {companyId: '1234', formName: 'Survey Form', formMetadata: 'Collecting user feedback'}
 */
async function createForm(req, res) {
    try {
        const form = await FormServices.createForm({
            companyId: req.body.companyId,
            formName: req.body.formName,
            formMetadata: req.body.formMetadata
        });
        SuccessResponse.data = form;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Error creating form.";
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    }
}

module.exports = {
    createForm
};
