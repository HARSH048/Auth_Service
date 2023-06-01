const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  SALT: bcrypt.genSaltSync(10),
  KEY: process.env.key,
  DB_SYNC: process.env.DB_SYNC,
};
