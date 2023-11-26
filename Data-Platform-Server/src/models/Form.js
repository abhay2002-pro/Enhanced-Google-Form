const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  formName: {
    type: String,
    required: true,
  },
  formMetaData: {
    type: Object,
  },
});

const Form =  mongoose.model('Form', schema);

module.exports = Form