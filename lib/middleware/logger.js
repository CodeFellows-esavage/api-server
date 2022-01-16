'use strict';

function logger(req, res, next) {
  console.log(req);
  console.log(`METHOD:${req.method}, PATH:${req.path}`);
  next();
}

module.exports = logger;