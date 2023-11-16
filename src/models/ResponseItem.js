const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  response: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Response",
    required: true,
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  answerMetadata: { type: object },
});

const ResponseItem = mongoose.model("ResponseItem", schema);

module.exports = ResponseItem;
