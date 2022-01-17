'use strict';

const { db } = require('./lib/models');
const { start } = require('./lib/server');
const PORT = process.env.PORT || 3000;

db.sync()
  .then(() => start(PORT))
  .catch(err => console.log(err));