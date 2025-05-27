# UDP Example: server.js and client.js

## What are these files?

- **server.js**: Sets up a UDP server that listens for messages on port 2222. When it receives a message, it logs the sender and message, then sends a response back.
- **client.js**: Sends a UDP message to the server and can receive a response.

## What are they for?

These files demonstrate how to use UDP sockets in Node.js for sending and receiving messages. Unlike TCP, UDP is connectionless and does not guarantee delivery or order, making it useful for fast, simple message passing where reliability is less important.

## How to start

**Start the server:**
```bash
node server.js
```

**Start the client (in a new terminal):**
```bash
node client.js
```

## Point of the example

To show how Node.js can send and receive messages using UDP sockets, illustrating the basics of connectionless network communication.