import asyncio
from websockets.asyncio.server import serve, ServerConnection


async def handle_new_websocket(websocket: ServerConnection):
    print("Client connected")
    async for message in websocket:
        print(message)
        await websocket.send(message)


async def main():
    async with serve(handle_new_websocket, "localhost", 8000) as server:
        await server.serve_forever()

asyncio.run(main())
