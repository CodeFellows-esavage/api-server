'use strict';

const express = require('express');
const app = express();

//routes will be here
const logger = require('./middleware/logger');
const ingredient = require('./routes/ingredient.route');
const recipe = require('./routes/recipe.route');

app.use(logger);
app.use('/ingredient', ingredient);
app.use('/recipe', recipe);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server running and listening on PORT: ${port}`);
    });
  },
  app,
};
