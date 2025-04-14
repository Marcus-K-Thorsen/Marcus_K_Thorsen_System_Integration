import express from 'express';
import cors from 'cors';
import { logRequestAndResponse } from './myModules.js';
import publicRoutes from './routes/publicRoutes.js';
import privateRoutes from './routes/privateRoutes.js';
import customRoutes from './routes/customRoutes.js';
import preflightRoutes from './routes/preflightRoutes.js';

const app = express();

// Use the logging middleware
app.use(logRequestAndResponse);

// Use the routers with different CORS setups
app.use('/public', publicRoutes); // Public routes
app.use('/private', privateRoutes); // Private routes
app.use('/custom', customRoutes); // Custom routes
app.use('/preflight', preflightRoutes); // Preflight routes

// Uncomment the line below to enable CORS using the cors middleware
// app.use(cors());
/*
What does "app.use(cors())" do?

1. CORS stands for Cross-Origin Resource Sharing.
2. By default, browsers block requests made from one website (origin) to another.
   For example, if your frontend is running on http://localhost:3000 and your backend
   is running on http://localhost:8080, the browser will block the request.
3. The "cors" middleware automatically adds the necessary headers to the server's
   responses to tell the browser: "It's okay to allow requests from other origins."
4. This makes it easier to allow your frontend and backend to communicate, even if
   they are running on different domains or ports.
*/

// Uncomment the line below to enable CORS with custom options
/*
app.use(cors({
    origin: "*", // Allow requests from any origin (e.g., http://localhost:3000, http://example.com)
    methods: ["GET"], // Allow only GET requests (e.g., block POST, PUT, DELETE, etc.)
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers in the request
    exposedHeaders: ["Content-Length", "X-Custom-Header"], // Expose specific headers to the client
    credentials: true, // Allow cookies or credentials to be sent with the request
    maxAge: 86400 // Cache the preflight response for 24 hours (in seconds)
}));
*/
/*
What does this configuration do?

1. `origin: "*"`:
   - This allows requests from any origin (any domain, protocol, or port).
   - You can replace `"*"` with a specific origin (e.g., `"http://example.com"`) to restrict access.
   - If you want to allow multiple origins, you can use a function to dynamically allow or block specific origins:
     ```javascript
     origin: (origin, callback) => {
         const allowedOrigins = ["http://example.com", "http://localhost:3000"];
         if (allowedOrigins.includes(origin) || !origin) {
             callback(null, true); // Allow the request
         } else {
             callback(new Error("Not allowed by CORS")); // Block the request
         }
     }
     ```

2. `methods: ["GET"]`:
   - This specifies which HTTP methods are allowed (e.g., GET, POST, PUT, DELETE).
   - In this example, only GET requests are allowed.
   - If a client tries to use a method not listed here (e.g., POST or PUT), the browser will block the request.
   - To allow multiple methods, you can list them like this:
     ```javascript
     methods: ["GET", "POST", "PUT", "DELETE"]
     ```

3. `allowedHeaders: ["Content-Type", "Authorization"]`:
   - This specifies which headers the client is allowed to send in the request.
   - For example, if the client sends a custom `Authorization` header (e.g., for authentication), it must be listed here.
   - If a required header is not listed, the browser will block the request.
   - Example use case:
     - A client sends an API request with an `Authorization` header to include a token:
       ```javascript
       fetch("http://localhost:8080/api", {
           method: "GET",
           headers: {
               "Authorization": "Bearer my-token"
           }
       });
       ```

4. `exposedHeaders: ["Content-Length", "X-Custom-Header"]`:
   - This specifies which headers the client is allowed to access in the response.
   - By default, the browser only exposes a limited set of headers (e.g., `Content-Type`).
   - If the server sends additional headers (e.g., `X-Custom-Header`), they must be listed here for the client to access them.
   - Example use case:
     - A server sends a custom header in the response:
       ```javascript
       res.setHeader("X-Custom-Header", "12345");
       res.send({ message: "Hello World" });
       ```
     - The client can access the custom header:
       ```javascript
       fetch("http://localhost:8080/api")
           .then(response => {
               console.log(response.headers.get("X-Custom-Header")); // Logs "12345"
           });
       ```

5. `credentials: true`:
   - This allows cookies or credentials (e.g., authentication tokens) to be sent with the request.
   - By default, `credentials` is set to `false`, meaning cookies or credentials are not sent.
   - When `credentials: true` is used, the `Access-Control-Allow-Credentials` header is added to the response.
   - Important:
     - When using `credentials: true`, you **cannot** use `origin: "*"` (wildcard origin). You must specify a specific origin.
   - Example:
     ```javascript
     credentials: true,
     origin: "http://example.com"
     ```
   - Real-world use case:
     - A client sends a request with cookies for authentication:
       ```javascript
       fetch("http://localhost:8080/api", {
           method: "GET",
           credentials: "include" // Include cookies in the request
       });
       ```

6. `maxAge: 86400`:
   - This specifies how long (in seconds) the browser should cache the preflight response.
   - Preflight requests (`OPTIONS`) are sent before non-simple requests (e.g., POST, PUT).
   - Caching the preflight response reduces the number of preflight requests, improving performance.
   - Example:
     ```javascript
     maxAge: 3600 // Cache preflight response for 1 hour
     ```
   - What happens after it expires?
     - Once the cache expires, the browser will send a new preflight request to the server.
     - The server must respond with the appropriate CORS headers again.
*/

// Use the CORS headers middleware (manual implementation)
// Uncomment the code below to use it instead of the cors() middleware
/*
app.use((req, res, next) => {
    // Allow requests from any origin
    res.header("Access-Control-Allow-Origin", "*");

    // Allow specific headers in the request
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Origin, X-Requested-With, Accept");

    // Allow specific HTTP methods
    res.header("Access-Control-Allow-Methods", "GET");

    // Expose specific headers to the client
    res.header("Access-Control-Expose-Headers", "Content-Length, X-Custom-Header");

    // Allow cookies or credentials to be sent with the request
    res.header("Access-Control-Allow-Credentials", "true");

    // Handle preflight requests (OPTIONS)
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Max-Age", "86400"); // Cache preflight response for 24 hours
        return res.sendStatus(204); // No content
    }

    // Move to the next middleware or route handler
    next();
});
*/

app.get("/timestamp", cors(), (req, res) => {
    res.send({ time: new Date() });
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));