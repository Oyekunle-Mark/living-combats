const request = require('supertest');
const server = require('../app/server');

const baseUrl = '/api/auth';

describe(`${baseUrl}/register [GET]`, () => {
  it('Registers a user', () =>
    request(server)
      .post(`${baseUrl}/register`)
      .send({
        email: 'email@email.com',
        password: 'worst-kept-secret',
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then(res => {
        expect(res.body.message).toEqual('User created successfully.');
      }));

  it('Validates the req body.', () =>
    request(server)
      .post(`${baseUrl}/register`)
      .expect('Content-Type', /json/)
      .expect(400)
      .then(res => {
        expect(res.body.message).toEqual(
          'Credential must include email and password of type string.',
        );
      }));
});
