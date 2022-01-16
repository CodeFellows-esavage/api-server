'use strict';

const express = require('express');
const router = express.Router();

//reference collection here

router.post('', create);
router.get('', read);
router.get('/:id', read);
router.put('/:id', update);
router.delete('/:id', destroy);

function create() {

}

function read() {

}

function update() {

}

function destroy() {

}

module.exports = router;