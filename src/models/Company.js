const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    unique: true,
  },
  companyMetaData: {
    type: Object,
  },
});

const Company = mongoose.model("Company", schema);

module.exports = Company