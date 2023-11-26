const { StatusCodes } = require('http-status-codes');
const { ResponseServices, FormServices } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { KafkaConfig } = require("../config")
const { Partitioners } = require("kafkajs");
const { Form } = require("../models")

/**
 * Submit a new response.
 * 
 * POST : /responses
 * req.body {formId: '1234', responder: '1234', responseMetaData: {}}
 */
async function createResponse(req, res) {
    try {
        const response = await ResponseServices.createResponse({
            formId: req.body.formId,
            responderPhoneNumber: req.body.responderPhoneNumber
        });

         // Configuring kafka producer
        const producer = KafkaConfig.kafka.producer({
            createPartitioner: Partitioners.LegacyPartitioner,
        });

        await producer.connect();

        const formData = await FormServices.getFormById(req.body.formId);
        console.log(formData);

        const pushData = {
            formId: req.body.formId,
            responderPhoneNumber: req.body.responderPhoneNumber,                
            spreadsheetId: formData.formMetaData?.spreadsheetId
        }

        console.log(pushData);
        
        await producer.send({
            topic: "form-submissions",
            messages: [
                {
                    value: JSON.stringify(pushData),
                },
            ],
        });

        await producer.disconnect();
        
        SuccessResponse.data = response;
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
