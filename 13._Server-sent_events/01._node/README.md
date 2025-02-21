# Server-Sent Events Example

This project demonstrates how to use Server-Sent Events (SSE) with an Express server to send real-time updates to the client.

## How to Use

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    $ git clone <repository-url>
    $ cd <repository-directory>
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Server

You can set the port yourself when starting the server by using the `PORT` environment variable.
If you do not set the PORT environment variable, the server will default to port 8080.

#### For Windows (Command Prompt)
```sh
set PORT=3000 && nodemon app.js
```

#### For Windows (PowerShel)
```sh
$env:PORT=3000; nodemon app.js
```

#### For macOS/Linux/Git Bash
```sh
export PORT=3000 && nodemon app.js
```
