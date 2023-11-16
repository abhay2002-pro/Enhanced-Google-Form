const mongoose = require("mongoose");
const validator = require("validator");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: validator.isEmail,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  access_token: String,
});

const User = mongoose.model("User", schema);

module.exports = User