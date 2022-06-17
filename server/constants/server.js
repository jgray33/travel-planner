const path = require("path");

const SERVER_PORT = 3001;

const SERVER_CONFIGS = {
  PRODUCTION: process.env.NODE_ENV === "production",
  PORT: process.env.PORT || SERVER_PORT,
};

module.exports = SERVER_CONFIGS;
