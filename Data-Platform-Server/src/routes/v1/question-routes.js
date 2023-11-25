const express = require("express");
const { QuestionController } = require("../../controllers");

const router = express.Router();

// /api/v1/questions POST
router.post("/", QuestionController.createQuestion);

module.exports = router;
