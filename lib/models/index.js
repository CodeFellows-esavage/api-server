'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite3:memory';

//schemas & Collection will be required here

const db = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  db,
};

