require('dotenv').config();
const request = require('supertest');
const server = require('../app/server');
const Team = require('../database/team/team');
const connectTestDb = require('../helpers/connectTestDb');

const baseUrl = '/api/team';

let token;

beforeAll(async () => {
  connectTestDb();

  Team.collection.drop();

  await request(server)
    .post('/api/auth/register')
    .send({
      email: 'jh@john.com',
      password: '12345',
      isAdmin: true,
    });

  const user = await request(server)
    .post('/api/auth/login')
    .send({
      email: 'jh@john.com',
      password: '12345',
    });

  token = user.body.token;
});

describe(`${baseUrl}/ [POST]`, () => {
  it('creates a team', () =>
    request(server)
      .post(`${baseUrl}`)
      .set('Authorization', token)
      .send({
        name: 'Man Utd',
        location: 'Manchester',
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then(res => {
        expect(res.body.data.name).toEqual('Man Utd');
        expect(res.body.data.location).toEqual('Manchester');
      }));

  it('Validates the req body.', () =>
    request(server)
      .post(`${baseUrl}`)
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(400)
      .then(res => {
        expect(res.body.message).toEqual(
          'Credential must include name and location of type string.',
        );
      }));
});

describe(`${baseUrl} [GET]`, () => {
  it('Get the created team', () =>
    request(server)
      .get(`${baseUrl}`)
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body.data.length).toEqual(1);
      }));

  it('Get the created team', () =>
    request(server)
      .get(`${baseUrl}`)
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body.data[0].name).toEqual('Man Utd');
      }));
});
