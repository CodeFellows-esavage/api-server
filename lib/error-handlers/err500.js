'use strict';

function err500(err, req, res, next) {

  if (err === 'Server Error') {
    console.log('Server Error');
    res.status(500).send('Server Error');
  }
}

module.exports = err500;