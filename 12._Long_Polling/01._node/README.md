# Long Polling Example

## What is Long Polling?

**Long polling** is a technique where the client requests information from the server and the server holds the request open until new data is available or a timeout occurs. This allows the client to receive updates as soon as they are available, reducing unnecessary requests compared to short polling.

In the `12._Long_Polling` example, the server keeps client connections open until there is a message to send, demonstrating how long polling can be used for near real-time updates.

---

## How to start the server

1. Open a terminal and navigate to this folder:
   ```
   cd "12._Long_Polling/01._node"
   ```
2. Install dependencies (if needed):
   ```
   npm install
   ```
3. Start the server:
   ```
   nodemon app.js
   ```
   The server will run on [http://localhost:8080](http://localhost:8080)

---

## Available Endpoints

- **GET `/events/subscribe`**  
  Clients connect to this endpoint to subscribe for updates. The server holds the connection open until a message is published.  
  *Purpose:* Allows clients to wait for new data without repeatedly polling.

- **GET `/events/publish`**  
  When this endpoint is called, the server sends a message to all currently subscribed clients and closes their connections.  
  *Purpose:* Used to trigger sending new data to all waiting clients.

---

## Why are these endpoints there?

- `/events/subscribe` demonstrates how clients can "wait" for updates using long polling.
- `/events/publish` simulates an event or new data being available, which is then pushed to all waiting clients.

This setup shows how long polling can be used to deliver real-time updates from server to client without constant polling.