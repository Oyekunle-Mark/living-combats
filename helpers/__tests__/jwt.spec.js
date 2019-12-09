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

  it('Decodes a token', async () => {
    const decoded = await verify(token);

    expect(decoded).toBeTruthy();
    expect(decoded.id).toEqual(obj.id);
    expect(decoded.isAdmin).toEqual(obj.isAdmin);
  });
});
