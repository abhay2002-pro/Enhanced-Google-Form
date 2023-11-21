const express = require("express");
const { FormController } = require("../../controllers");

const router = express.Router();

// /api/v1/forms POST
router.post("/", FormController.createForm);

module.exports = router;
