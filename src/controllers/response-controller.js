const { StatusCodes } = require('http-status-codes');
const { ResponseServices } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * Submit a new response.
 * 
 * POST : /responses
 * req.body {formId: '1234', responder: '1234', responseMetaData: {}}
 */
async function createResponse(req, res) {
    try {
        const form = await ResponseServices.createResponse({
            formId: req.body.formId,
            responderId: req.body.responderId,                
            responseMetadata: req.body.formMetadata
        });
        SuccessResponse.data = form;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Error submitting response.";
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    }
}

module.exports = {
    createResponse
};
