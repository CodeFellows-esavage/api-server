'use strict';

const { response } = require('express');
const express = require('express');
const router = express.Router();

//reference collection here
const { RecipeCollection } = require('../models');

router.post('', create);
router.get('', read);
router.get('/:id', read);
router.put('/:id', update);
router.delete('/:id', destroy);

async function create(req, res) {
  const inDataBase = await RecipeCollection.read(null, req.body.name);
  console.log(inDataBase);
  if (inDataBase) {
    res.status(409).send('Already Exists');
  } else {
    const newRecipe = await RecipeCollection.create(req.body);
    res.status(201).send(newRecipe);
  }
}

async function read(req, res) {
  const { id } = req.params;
  const recipes = id ? await RecipeCollection.read(id) : await RecipeCollection.read();
  res.status(200).send(recipes);
}

async function update(req, res) {
  const { id } = req.params;
  const updatedRecipe = await RecipeCollection.update(req.body, id);
  if (updatedRecipe[0]) {
    const updatedRecipeObj = await RecipeCollection.read(id);
    res.status(202).send(updatedRecipeObj);
  } else {
    res.status(404).send('Not Found');
  }
}

async function destroy(req, res) {
  const { id } = req.params;

  const destroyedRecipe = await RecipeCollection.destroy(id);
  if (destroyedRecipe) {
    res.status(204).send('Recipe Deleted');
  } else {
    res.status(404).send('Not Found');
  }
}

module.exports = router;