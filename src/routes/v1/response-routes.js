const express = require("express");
const { ResponseController } = require("../../controllers");

const router = express.Router();

// /api/v1/responses POST
router.post("/", ResponseController.createResponse);

module.exports = router;
