'use strict';

function err404(req, res) {
  console.log('Bad Route');
  res.status(404).send('Bad Route');
}

module.exports = err404;