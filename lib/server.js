'use strict';

const express = require('express');
const app = express();

//routes will be here
const logger = require('./middleware/logger');

app.use(logger);


module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server running and listening on PORT: ${port}`);
    });
  },
  app,
};
