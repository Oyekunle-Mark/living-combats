require('dotenv').config();
const { v4 } = require('uuid');
const { sign, verify } = require('../jwtHelpers');

describe('Signs and verifies token', () => {
  const obj = {
    id: v4(),
    isAdmin: false,
  };
  let token;

  it('Signs an object', async () => {
    token = await sign(obj);

    expect(token).toBeTruthy();
    expect(typeof token).toEqual('string');
  });
});
