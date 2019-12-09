# Mock League

An API for a mock football league

## Technologies Used

The following technologies where used.

- Node
- Express
- MongoDB
- Redis
- Jest
- Eslint(AirBnB Style Guide)

## Setup

Make sure you provide the following environment variables.

```sh
PORT=[Port to start the app]
MONGODB_URI=[mongodb url]
JWT_SECRET=[JWT secret key]
TEST_DB_URL=[the test database]
```

Also, ensure you have `MongoDB` and `Redis` daemon running before starting the app.

## Scripts

- `npm start` - to start the prod server.
- `npm run server` - to start the development server.
- `npm test` - to run unit and e2e tests.
- `npm run seed` - to seed the db.

## Documentation

The full API docs can be found [here](https://documenter.getpostman.com/view/6495381/SWE6aHtB)

## Deploy

This backend is deployed on heroku. Find it [here](https://mock-fl.herokuapp.com/)

## Author

Oyekunle Oloyede
