const mongoose = require("mongoose");
const { ENUMS } = require('../utils/common');

const schema = new mongoose.Schema({
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Form',
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    enum: ENUMS.QUESTION_TYPE,
    required: true,
  },
  questionMetadata: {
    type: Object,
  },
});

const Question = mongoose.model("Question", schema);

module.exports = Question;
