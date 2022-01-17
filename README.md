# api-server
Creating a api server to perform CRUD Operations on a database with added database abstraction and associations for code401 Lab 04

- Developed By: Erik Savage

dev branch PR: https://github.com/eriksavage/api-server/pull/1

Deployment URL: [https://esavage-api-server.herokuapp.com](https://esavage-api-server.herokuapp.com/)

![Data Flow](/UML.png)

## Installation
- to install run `git@github.com:eriksavage/api-server.git`
- `cd` into api-server
- run `npm install`

## Usage
- To start server run : `npm start`
- To test server run: `npm run test`

## Models

### Recipe
```
'Recipe', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  instructions: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}
```

### Ingredient
```
'Ingredient', {
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
}
```

## Routes

### Recipe
-  POST `/recipe`, requires a recipe object: returns created recipe object from database
-  GET `/recipe`, returns an array of all recipe objects entered in the database
-  GET `/recipe/:id`, requires database id returns a specific recipe object entered in the database
-  POST `/recipe/:id`, requires database id and a recipe object: updates a specific recipe object entered in the database
-  DELETE `/recipe/:id`, requires database id: deletes a specific food object from the database

### Ingredient
-  POST `/ingredient`, requires a ingredient object: returns created ingredient object from database
-  GET `/ingredient`, returns an array of all ingredient objects entered in the database
-  GET `/ingredient/:id`, requires database id returns a specific ingredient object entered in the database
-  POST `/ingredient/:id`, requires database id and a ingredient object: updates a specific ingredient object entered in the database
-  DELETE `/ingredient/:id`, requires database id: deletes a specific ingredient object from the database

## Features
- Error Handling
  - sends 404 if route or method is unavailable

## Testing
Verifies the following:
- 404 on a bad route
- 404 on a bad method

The correct status codes and returned data for each REST route:
- Create a record using POST
- Read a list of records using GET
- Read a record using GET
- Update a record using PUT
- Destroy a record using DELETE

## Resources
- sequelize docs
- jest docs
- supertest docs
- http cats
- Code Fellows
- Daniel Jackson
- Andrew Enyeart