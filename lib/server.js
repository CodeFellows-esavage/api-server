'use strict';

const express = require('express');
const app = express();

//routes will be here
const logger = require('./middleware/logger');
const ingredient = require('./routes/ingredient.route');
const recipe = require('./routes/recipe.route');
const err404 = require('./error-handlers/err404');
const err500 = require('./error-handlers/err500');

app.use(express.json());
app.use(logger);
app.use('/ingredient', ingredient);
app.use('/recipe', recipe);
app.use(err404);
app.use(err500);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server running and listening on PORT: ${port}`);
    });
  },
  app,
};
