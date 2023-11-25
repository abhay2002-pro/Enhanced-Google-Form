const { StatusCodes } = require('http-status-codes');
const { QuestionServices } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * Create a new company.
 * 
 * POST : /companies
 * req.body {formId: '1344', questionText: 'Which of the following you like the most in Atlan?',  questionType: 'choices',  questionMetadata: {}}
 */
async function createQuestion(req, res) {
    try {
        const question = await QuestionServices.createQuestion({
            formId: req.body.formId,
            questionText: req.body.questionText,
            questionType: req.body.questionType,
            questionMetadata: req.body.questionMetadata
        });
        SuccessResponse.data = question;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Error creating question.";
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    }
}


module.exports = {
    createQuestion,
};
