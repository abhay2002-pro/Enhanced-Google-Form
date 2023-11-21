const express = require("express");

const CompanyRoutes = require("./company-routes");
const formRoutes = require("./form-routes");
const questionRoutes = require("./question-routes");
const userRoutes = require("./user-routes");
const responseRoutes = require("./response-routes");

const router = express.Router();

router.use("/companies", CompanyRoutes);
router.use("/forms", formRoutes);
router.use("/questions", questionRoutes);
router.use("/users", userRoutes);
router.use("/responses", responseRoutes);

module.exports = router;