const redis = require('redis');

const { REDIS_URL } = process.env;
const client = redis.createClient(REDIS_URL);

// eslint-disable-next-line no-console
client.on('connect', () => console.log('Redis client connected'));

// eslint-disable-next-line no-console
client.on('error', err => console.error(err));

const set = (key, value) => client.set(key, value, redis.print);

const get = key =>
  client.get(key, (err, result) => {
    if (err) {
      console.error(err);
      return null;
    }

    return result;
  });

module.exports = {
  set,
  get,
};
