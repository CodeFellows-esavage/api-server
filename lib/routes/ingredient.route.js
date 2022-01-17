'use strict';

const express = require('express');
const router = express.Router();

//reference collection here
const { IngredientCollection } = require('../models');
const { RecipeCollection } = require('../models');

router.post('', create);
router.get('', read);
router.get('/:id', read);
router.put('/:id', update);
router.delete('/:id', destroy);

async function create(req, res) {
  const ingredientObj = req.body;
  const recipeName = ingredientObj.recipeName;
  const recipe = await RecipeCollection.read(null, recipeName);

  if (recipe) {
    ingredientObj.recipeId = recipe.id;
    console.log(ingredientObj);
    const newIngredient = await IngredientCollection.create(ingredientObj);
    res.status(201).send(newIngredient);
  } else {
    res.status(406).send('No Recipe Exists for Ingredient');
  }
}

async function read(req, res) {
  const { id } = req.params;
  let ingredients;
  try {
    if (id) {
      ingredients = await IngredientCollection.read(id);
    } else {
      ingredients = await IngredientCollection.read();
    }
    if (ingredients) {
      res.status(200).send(ingredients);
    } else {
      res.status(404).send('Not Found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }

}

async function update(req, res) {
  const { id } = req.params;
  const updatedIngredient = await IngredientCollection.update(req.body, id);
  if (updatedIngredient[0]) {
    const updatedIngredientObj = await IngredientCollection.read(id);
    res.status(202).send(updatedIngredientObj);
  } else {
    res.status(404).send('Not Found');
  }
}

async function destroy(req, res) {
  const { id } = req.params;

  const destroyedIngredient = await IngredientCollection.destroy(id);
  if (destroyedIngredient) {
    res.status(204).send('Ingredient Deleted');
  } else {
    res.status(404).send('Not Found');
  }
}

module.exports = router;
