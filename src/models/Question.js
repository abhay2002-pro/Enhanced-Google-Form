const mongoose = require("mongoose");
const { ENUMS } = require('../utils');

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

const Form = mongoose.model("Form", schema);

module.exports = Form;
