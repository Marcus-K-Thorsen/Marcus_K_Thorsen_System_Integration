# Server-Sent Events Example

This project demonstrates how to use Server-Sent Events (SSE) with an Express server to send real-time updates to the client.

## What is SSE (Server-Sent Events)?

**Server-Sent Events (SSE)** is a technology that allows a server to push real-time updates to the browser over a single HTTP connection. Unlike WebSockets, SSE is one-way (server-to-client) and is simple to use for streaming updates like notifications or live data.

## How it works in this example

- **`app.js`** sets up an Express server with a `/synchronizetime` endpoint. When a client connects to this endpoint, the server sends the current time every second using the SSE protocol.
- **`public/index.html`** uses JavaScript's `EventSource` to connect to `/synchronizetime`. It listens for messages from the server and updates the page with the latest time.

## How to run

You can set the port yourself when starting the server by using the `PORT` environment variable.
If you do not set the PORT environment variable, the server will default to port 8080.

#### For Windows (Command Prompt)
```sh
set PORT=3000 && nodemon app.js
```

#### For Windows (PowerShell)
```sh
$env:PORT=3000; nodemon app.js
```

#### For macOS/Linux/Git Bash
```sh
export PORT=3000 && nodemon app.js
```

Open [http://localhost:8080](http://localhost:8080) (or your chosen port) in your browser to see real-time time updates from the server.