'use strict';

const express = require('express');
const app = express();

//routes will be here



module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server running and listening on PORT: ${port}`);
    });
  },
  app,
};
