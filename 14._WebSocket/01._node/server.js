import { WebSocketServer } from "ws";

const PORT = process.env.PORT ?? 8080;

const server = new WebSocketServer({ port: PORT });

const users = [];

server.on("connection", (ws) => {
    console.log("Amount of Clients:", server.clients.size);
    //console.log("New connection:", ws);

    ws.on("message", (message) => {
        console.log(`Message received from the client: ${message}`);

        server.clients.forEach((client) => {
            client.send(String(message));
        });
    });

    ws.on("close", () => {
        console.log("Client disconnected", server.clients.size);
    });
});