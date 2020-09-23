# Getting Data from the Server

Use a tool called [JSON Server](https://github.com/typicode/json-server) to act as server

Run json-server using `npx json-server --port 3001 --watch db.json`

db.json will be rendered on localhost:port 

The idea will be to save the notes to the server
    - React code fetches notes from server and renders them to screen
    - Whenever new note is added to application, React also sends to server to make new note persist in "memory"

json-server stores all data in `db.json` file

## The browser as a runtime environment

- Our first task is to fetch existing notes from localhost:3001/notes
- Browsers widely supports the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
- Javascript runtime environments follow the [asynchronous model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
    - **Code execution continues immediately after calling an IO function, without waiting for it to return**
- Javascript engines are single-threaded
    - Requirement to use non-blocking model for executing IO operations

[What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

## npm

- We will be using [axios](https://github.com/axios/axios) for communication between browser and server
- A clear indicated a project uses npm is the `package.json` file located at the root of the project
    - The dependencies portion of the file defines what external libraries the project has
- npm-commands should always be run in the project root directory

## Axios and promises

- Axios' method `get` returns a **promise** 
    - Promise is an object representing the eventual completion or failure of an asynchronous operation
- Three distinct states of a promise
    1. Pending: final value is not available yet
    2. Fulfilled: operation has completed; generally succesful operation (sometimes called resolved)
    3. Rejected: error prevented final value being determined; failed operation
- To access result of operation represented by promise, register an event handler to promise
    - `promise.then(response => ...)`
- JS runtime environment calls callback function registered by the `then` method providing it w/ a `response` object as parameter
    - `response` object contains essential data related to response of HTTP GET request like data, status code, and headers

## [Effect-hooks](https://reactjs.org/docs/hooks-effect.html)

- Allows you to perform **side effects** in function components
    - Side effects include: data fetching, setting up a subscription, manually changing DOM in React components
- A call to a state-updating function triggers re-rendering of component
- `useEffect` takes two parameters
    - a function, the effect itself. Effects run after every completed render, but you can choose to fire it only when certain values are changed
    - second param used to specifiy how often the effect is run
        - if empty array `[]`, effect is only run along w/ first component render

## The development runtime environment

![Application configuration](https://fullstackopen.com/static/650087bbee40291069025432f1408a29/d4713/18e.png)

