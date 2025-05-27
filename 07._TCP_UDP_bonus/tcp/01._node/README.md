# How to setup

```bash
$ npm init -y
$ npm i net
```

Then add the following key-value pair in top-level of `package.json`:

```json
"type": "module"
```

## How to Run the Examples

### TCP (Node.js)

**Start the server:**
```bash
cd tcp/01._node
node server.js
```

**Start the client (in a new terminal):**
```bash
cd tcp/01._node
node client.js
```

---

## What is the point of client.js and server.js?

These two files demonstrate a simple example of **TCP socket communication** in Node.js:

- **server.js** creates a TCP server that listens for incoming connections on `127.0.0.1:2222`. When a client connects, the server sends a greeting, logs any data received from the client, and replies back.
- **client.js** acts as a TCP client that connects to the server, sends a message ("Hello Server"), receives a response from the server, and then closes the connection.

**Purpose:**  
To show how two Node.js programs can communicate directly over TCP sockets, exchanging raw data without using HTTP or a web browser. This is useful for understanding low-level network programming and how protocols like HTTP are built on top of TCP.