'use strict';

function err500(err, req, res, next) {

  if (err) {
    console.log('Server Error');
    res.status(500).send(err);
  }
}

module.exports = err500;