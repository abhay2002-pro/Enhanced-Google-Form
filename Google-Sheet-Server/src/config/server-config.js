const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    CLIENTEMAIL: process.env.CLIENTEMAIL,
    PRIVATEKEY: process.env.PRIVATEKEY
  };
  