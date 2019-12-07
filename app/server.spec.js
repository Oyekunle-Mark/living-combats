const request = require('supertest');
const server = require('./server');

describe('/ [GET]', () => {
  it('returns a status 200', () =>
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200));

  it('returns a message', () =>
    request(server)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body.message).toEqual(
          'The Mock Premier League API is alive and kicking!',
        );
      }));

  it('catches and handles bad request', () =>
    request(server)
      .get('/very-inappropriate-url')
      .expect('Content-Type', /json/)
      .expect(404)
      .then(res => {
        expect(res.body.message).toEqual('That URL looks quite fishy, mate!');
      }));
});
