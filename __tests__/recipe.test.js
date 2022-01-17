'use strict';

const { app } = require('../lib/server');
const { db } = require('../lib/models');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing the ingredient router', () => {
  it('should create a record using POST', async () => {
    const response = await request.post('/recipe').send({
      name: 'Buttered Bread',
      instructions: 'Spread butter on bread',
    });

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('Buttered Bread');
  });

  it('should read a list of records using GET', async () => {
    await request.post('/recipe').send({
      name: 'Fried Egg',
      instructions: 'Cook egg in butter. Add salt and pepper.',
    });

    const response = await request.get('/recipe');

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);
  });

  it('should read a record using GET', async () => {
    const response = await request.get('/recipe/2');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Fried Egg');
  });

  it('Update a record using PUT', async () => {
    const response = await request.put('/recipe/2').send({
      name: 'Fried Egg',
      instructions: 'Cook egg in oil. Add salt and pepper.',
    });

    expect(response.status).toEqual(202);
    expect(response.body.instructions).toEqual('Cook egg in oil. Add salt and pepper.');
  });

  it('should destroy a record using DELETE', async () => {
    const response = await request.delete('/recipe/1');

    expect(response.status).toEqual(204);
    expect(response.header.data).toEqual(undefined);
  });
});