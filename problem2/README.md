# Problem 2

This project has 2 directories, frontend and backend.
Frontend is bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
How to start backend.
Backend is bootstrapped with [Flask](https://flask.palletsprojects.com).

Note: Backend is supposed to call [Flikr API](https://www.flickr.com/services/api/) on the basis of `query` word coming from frontend but due to complication of storing API key and time constraint of this assignment, I have hardcoded response of API at backend and it is filtered at front end for sake of simplicity.

## How to setup

### backend

- navigate to directory
- create virtual env with `virtualenv flask` (only once at time of setup)
- now run server `python server.py`
- open `http://127.0.0.1:5000/data` in browser to check if data is coming

### frontend

- navigate to directory
- do `yarn start` in terminal and open `http://localhost:3000` in browser

## Output

![gif](https://raw.githubusercontent.com/vikrantshroti/assignment-zevi/master/problem2/demo.gif)
