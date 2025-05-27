# Overview: TCP, UDP, and UNIX Domain Sockets in Node.js

This folder demonstrates three types of sockets you can use for network communication in Node.js:

1. **TCP (Transmission Control Protocol)**
   - Connection-oriented protocol.
   - Guarantees reliable, ordered delivery of data.
   - Used for most internet traffic (e.g., web servers, email).
   - Example files: `tcp/01._node/server.js`, `tcp/01._node/client.js`

2. **UDP (User Datagram Protocol)**
   - Connectionless protocol.
   - Faster, but does not guarantee delivery or order.
   - Used for streaming, games, or real-time applications.
   - Example files: `udp/01._node/server.js`, `udp/01._node/client.js`

3. **UNIX Domain Sockets**
   - Used for communication between processes on the same machine.
   - Not demonstrated in this folder, but supported in Node.js.

---

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

### UDP (Node.js)

**Start the server:**
```bash
cd udp/01._node
node server.js
```

**Start the client (in a new terminal):**
```bash
cd udp/01._node
node client.js
```

---

## Summary

- **TCP** is reliable and connection-based.
- **UDP** is fast and connectionless.
- **UNIX domain sockets** are for local inter-process communication.

Use the commands above to quickly start and test the examples in this folder.