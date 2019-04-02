# Round-up-challenge

A "round-up" feature for bank customers to take all the transactions from the past week and round them up to the nearest pound and then transferring that amount to a savings goal.

# Project Set-up

- Navigate to the root directory
- Run 'npm install'
- In /src/config/index.js add the following:
***
const accessToken = *YOUR ACCESS TOKEN*

const accountUid = *YOUR ACCOUNT ID*

export { accessToken, accountUid }
***
- Run 'npm run server' to spin up the express server
- In another terminal window at the same dir, run 'npm run start' to spin up the local dev environment
- Go to 'http://localhost:8080/' in your browser to view page

- Run 'npm run build' to compile for production

# Build choices

An express API server was built to directly interface with the Starling Bank API. The app sends and recieves all it's data requests to this node backend.
On launch, the app immediately checks for a 'Round Up Saver' savings goal and creates one if it's not present, which it then uses to save the round up money that we calculate from all the transactions of the past 6 days.
The app is built using the React context API and React hooks to simulate a rudimentary app store in order to store app state.
Unit testing is done with react-testing-library in more of a lean towards behaviour driven testing.
Styling is done with css-in-js using emotion.
