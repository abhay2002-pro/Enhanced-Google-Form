const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
    required: true,
  },
  responderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  responseMetadata: {
    type: Object,
  },
});

const Response = mongoose.model("Response", schema);

module.exports = Response;
