const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
const express = require("express");
//const app = express();
//const config = require("./config/config");
//const logger = require("./config/logger");

//const PORT = 8082;

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
   // logger.info("Connected to MongoDB");
    server = app.listen(config.port, () => {
      //logger.info(`Listening to port ${config.port}`);
    });
  });
// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
