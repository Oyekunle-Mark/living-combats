const { compare, hash } = require('../bcryptHelper');

describe('The bcrypt helper hashes and compares hash', () => {
  const password = 'worst_kept_secret';
  let hashedPass;

  it('Hashes a password', async () => {
    hashedPass = await hash(password);

    expect(hashedPass).toBeTruthy();
    expect(typeof hashedPass).toEqual('string');
  });

  it('Compares a password correctly', async () => {
    let matches = await compare(password, hashedPass);

    expect(matches).toEqual(true);
    expect(matches).not.toEqual(false);

    matches = await compare('oranges', hashedPass);

    expect(matches).toEqual(false);
  });
});
