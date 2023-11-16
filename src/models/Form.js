const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  formname: {
    type: String,
    required: true,
    unique: true,
  },
  formMetaData: {
    type: Object,
  },
});

const Form = mongoose.model("Form", schema);

module.exports = Form