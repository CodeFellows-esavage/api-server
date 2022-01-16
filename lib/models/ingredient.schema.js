'use strict';

const Ingredient = (sequelize, DataTypes) => sequelize.define('Ingredients', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qauntity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  units: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  onHand: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Ingredient;
