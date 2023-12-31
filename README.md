# React + TypeScript + Vite + Flask

## Task
> Create a Flask-based web application with a frontend that features two interactive buttons. When a button is clicked, an event is sent to the backend, which randomly responds with either "success" or "failure". This response, along with the button clicked, should be logged in a UI element on the frontend (a "log viewer"). Importantly, this log should persist between user sessions. Use any modern CSS and JavaScript framework (like React, Vue.js, Angular or other) to enhance interactivity. 


### Clone repostitory
`git clone https://github.com/nicolaefilat/LogViewer.git`

## Setup frontend   
1. `cd react-frontend`
2. `npm install` to install dependencies
3. `vite dev` to run the dev server and navigate to the url from the terminal

The frontend should look like this:
![image](https://github.com/nicolaefilat/LogViwer/assets/35890341/91f771f4-2365-4b74-b6fc-e81a53cf3788)



## Setup server
1. `pip install -r requirements.txt`
2. `flask run`


## UI
1. If `Button 1` is clicked a log item will appear with the name `Button 1` and a random status
2. If `Button 2` is clicked a log item will appear with the name `Button 2` and a random status
3. If `Reset`    is clicked the localStorage is cleared and the page is refreshed resulting in an empty log.
4. If `Refresh`  is clicked the page is refreshed to show that the log is persisted

### Implementation
The main idea is that the server generates a `session_id` for the user when the user first visits the page and using that `session_id`
the server stores the logs on the server in memory (real uses cases would use a database).
The `session_id` is stored in the browser's localStorage to enable reopening the same log even after closing the browser.

The general architecture is shown below
![image](https://github.com/nicolaefilat/LogViwer/assets/35890341/aab2ea6d-44bb-44b4-a724-89666c06808f)

### Warning
If the initial setup does not work click `reset` and restart the server. This should make sure that the client requests a new session from the server.
