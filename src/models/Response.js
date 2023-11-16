const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
    required: true,
  },
  responder: {
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
