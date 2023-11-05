# Ruby-on-Rails-test

Technical test solution.

## API

Pre-requisites:
- Ruby 3.2.2
- Sqlite3 >= 3.3

NOTE: The api is located in the `dg-api` subdirectory.

To install the api, run the following commands:

- `bundle install`
- `bin/rails db:create`
- `bin/rails db:migrate`
- `bin/rails db:seed`

Start the api with `bin/rails server`. The api will be available at `http://localhost:3000`.

To run the tests, use `bin/rspec`.

## UI

Pre-requisites:
- Node 16+

NOTE: The ui is located in the `dg-ui` subdirectory.

To install the ui, run `npm install`

To start the ui, run `npm run dev`. The ui will be available at `http://localhost:5173`

To run the tests, use `npm run test`

## General notes

The app is pre-seeded with goodgymers, areas and sessions. The current goodgymer can be changed at any time with the "Sign in as user" control located top left.

## Troubleshooting

If the ui displays only a blank screen, please check the api is running on port 3000. If this port causes conflicts, the api can be started on another port with the `-p` switch - e.g. `bin/rails server -p 3333`. If this is done, the ui code will need to be updated - `src/App.jsx:8` should be changed to, e.g. `http://localhost:3333`.






