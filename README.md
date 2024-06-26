# Contacts Viewer

![alt text](image.png)

A simple data-driven contacts viewing application

## Get it running

- `npm i` to install all packages required
- add a `.env` file at root with a `VITE_BASE_API_URL` variable
- `npm run dev` to get it running
- `npm run dev -- --host` to expose it on your local network to test on mobile

## Tech used

- `react-query` with `axios` used in hooks for queries and mutations
- css modules for majority of component styling
- `prettier`/`eslint` configured for auto formatting and linting
- `vitests` and `react-testing-library` for testing

## What I'd do next

- Implement edit and create:
  - a new modal which contains inputs for each of the data points
  - for create, a file picker to choose avatar
- testing:
  - implement msw to mock data calls and perform more user-like UI testing
