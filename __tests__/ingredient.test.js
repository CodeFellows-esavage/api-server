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
    await request.post('/recipe').send({
      name: 'Buttered Bread',
      instructions: 'Spread butter on bread',
    });

    const response = await request.post('/ingredient').send({
      name: 'Butter',
      qty: '0.5',
      units: 'tbsp',
      recipeName: 'Buttered Bread',
    });

    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('Butter');
  });

  it('should read a list of records using GET', async () => {
    await request.post('/ingredient').send({
      name: 'Bread',
      qty: '1',
      units: 'slice',
      recipeName: 'Buttered Bread',
    });

    const response = await request.get('/ingredient');

    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(2);
  });

  it('should read a record using GET', async () => {
    const response = await request.get('/ingredient/2');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Bread');
  });

  it('Update a record using PUT', async () => {
    const response = await request.put('/ingredient/1').send({
      name: 'Butter',
      qty: '1',
      units: 'tbsp',
      recipeName: 'Buttered Bread',
    });

    expect(response.status).toEqual(202);
    expect(response.body.qty).toEqual(1);
  });

  it('should destroy a record using DELETE', async () => {
    const response = await request.delete('/ingredient/2');

    expect(response.status).toEqual(204);
    expect(response.header.data).toEqual(undefined);
  });
});
