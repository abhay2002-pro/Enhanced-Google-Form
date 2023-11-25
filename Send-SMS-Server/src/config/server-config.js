const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    ACCOUNT_SID: process.env.ACCOUNT_SID,
    AUTH_TOKEN: process.env.AUTH_TOKEN
  };
  