const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
    required: true,
  },
  responderPhoneNumber: {
    type: String,
    required: true,
  },
  responseMetadata: {
    type: Object,
  },
});

// Make the combination of responderEmail and formId unique
schema.index({ formId: 1, responderPhoneNumber: 1 }, { unique: true });

const Response = mongoose.model("Response", schema);

module.exports = Response;
