# typescript-graphql-api

- Install dependencies: `npm i`
- Create a Postgres database and set your credentials on a `.env` file, similar to `.env.example` (you can start a Postgres db with Docker by running `npm run get:pg` followed by `npm run start:pg`)
- Create a Redis database and set your credentials on a `.env` file, similar to `.env.example` (you can start Redis with Docker by running `npm run get:redis` followed by `npm run start:redis`)
- Run the application: `npm start`
- Navigate to `http://localhost:8080/api`
- Make sure the app is up and running before generating the client types (`npm run gen`)
