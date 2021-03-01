# Umur Alpay Blockchain Explorer Challange for Bitwala

This project consists of 2 applications (Frontend and Backend). UI is built with React and backend is built with [NodeJS + Express](https://github.com/developit/express-es6-rest-api). I tried to complete the challenge in 2-3 hours,  so there are some missing opportunities to make the application in a better shape.

## Installation

Use the node package manager to install the dependencies for both backend and frontend. You don't need to run seperately, just run the command below in the parent folder.

```bash
npm install
```

## Usage

In order to run both applications from the parent folder you can use the command below.

```bash
npm start
```

## Testing

Test suites are available for both projects but I only had time to add tests for backend side. I didn't choose TDD because of the timing limit. To run the tests run the commands below

```bash
cd backend
npm run jest
```

## Known Issues

- I used express es6 boilerplate but it seems the production build somehow doesn't support async/await usage so I'm running dev build.
- There is an issue about exiting when Jest executes all test cases. This is probably about the boilerplate again, seperating the app.listen command to a seperate module might help

## Possible Upgrades

- Caching could have been implemented by storing the results in the DB rather than sending api requests every time, MongoDB could have been a better solution to store the data in DB. Maybe Redis could have been implemented.
- State management tools like Redux could be implemented in order to save the state and data flow.
- I wrote some unit tests to backend side, but some e2e test would be good for the front end side
- Although Docker is ready in the boilerplate for backend, I didn't have time to configure that part. Applications could have been Dockerized and after that backend would be scaled with swarm or kubernetes
- UI Application can be stored in AWS Lambda in order to save from devops operations
- I did component based structure, but I used every component once, so I skipped reusability to save time, so I didn't make it in a complete way. That can be improved.
- Because we are storing the code in Github we can use Actions to maintain CI/CD pipeline

