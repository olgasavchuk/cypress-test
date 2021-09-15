# Sauce Demo E2E Tests for Adjust by Volha Sauchuk

## Pre-requisites
1. [Google Chrome](https://github.com/olgasavchuk/cypress-test)
2. [node.js](https://nodejs.org/en/download/)
3. [npm](https://docs.npmjs.com/getting-started)

## Technologies
1. [cypress](https://www.cypress.io/)

## Run Locally
To run tests locally use the following command from the project root directory:
```
npm run e2e
```

## Improvements Suggestions
1. Add Environments support
2. Add BDD feature (e.g. using Cucumber)

## Known Issues
1. It's not secure to store sensitive information (as credentials) in json file. It's better to keep such data in some parameter storage with encryption (like AWS Systems Manager or Octopus) and pass it to the application from the CI/CD pipeline. Just for the simplisity in this task it was added to the userData.json file.
2. It's better to prepare some item before the test execution (e.g. create a new item throught API). And then work with it through shopping cart test, instead of using just the first item. Again just for simplicity it was done it this way here.