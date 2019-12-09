const { compare, hash } = require('../bcryptHelper');

describe('The bcrypt helper hashes and compares hash', () => {
  const password = 'worst_kept_secret';

  it('Hashes a password', async () => {
    const hashedPass = await hash(password);

    expect(hashedPass).toBeTruthy();
    expect(typeof hashedPass).toEqual('string)');
  });
});
