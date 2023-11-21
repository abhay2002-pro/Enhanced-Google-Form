const { StatusCodes } = require('http-status-codes');
const { UserServices } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

/**
 * Create a new user.
 * 
 * POST : /
 * req.body {username: 'abhay', email: 'abhayray2002@gmail.com', password: 'xxxxxxxxx',}
 */
async function createUser(req, res) {
    try {
        const user = await UserServices.createUser({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        SuccessResponse.data = user;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        ErrorResponse.message = "Error creating user.";
        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse);
    }
}


module.exports = {
    createUser,
};
