const express = require("express");
const { CompanyController } = require("../../controllers");

const router = express.Router();

// /api/v1/companies POST
router.post("/", CompanyController.createCompany);

module.exports = router;
