'use strict';

const Ingredient = (sequelize, DataTypes) => sequelize.define('Ingredients', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  units: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recipeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recipeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Ingredient;
