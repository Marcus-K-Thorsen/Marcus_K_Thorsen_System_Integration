import express from 'express';

const router = express.Router();

/*
What is a Preflight Request?

1. **Definition**:
   - A preflight request is an HTTP `OPTIONS` request sent by the browser before making a "non-simple" request.
   - It is part of the CORS (Cross-Origin Resource Sharing) protocol.

2. **Purpose**:
   - The browser sends a preflight request to check if the server allows the actual request.
   - The server responds with headers that specify:
     - Which HTTP methods are allowed.
     - Which headers can be sent in the request.
     - Whether credentials (e.g., cookies) are allowed.

3. **When is a Preflight Request Sent?**
   - A preflight request is sent when:
     - The HTTP method is not one of the "simple" methods (`GET`, `POST`, `HEAD`).
     - The request includes custom headers (e.g., `Authorization`).
     - The `Content-Type` is not one of the "simple" types (`text/plain`, `application/x-www-form-urlencoded`, `multipart/form-data`).

4. **Basic Flow**:
   - The browser sends an `OPTIONS` request to the server.
   - The server responds with the appropriate CORS headers.
   - If the response is valid, the browser proceeds with the actual request.
*/

/*
What is this middleware doing?

1. It applies CORS headers to all requests to the `/timestamp` route.
2. It handles both preflight (`OPTIONS`) requests and actual requests (`GET`, `POST`, etc.).
3. It ensures consistency by centralizing the CORS configuration.
*/

// Apply CORS headers to all requests to `/timestamp`
router.use('/timestamp', (req, res, next) => {
    // Allow requests from a specific origin
    /*
    - Specifies which origins are allowed to access the resource.
    - Example: `http://localhost:3000` allows requests from this origin.
    */
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend's origin

    // Specify which HTTP methods are allowed
    /*
    - Specifies which HTTP methods are allowed for the resource.
    - Example: `GET, POST, PUT, DELETE` allows these methods.
    */
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Specify which headers the client is allowed to send
    /*
    - Specifies which headers the client is allowed to include in the request.
    - Example: `Content-Type, Authorization` allows these headers.
    */
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Specify how long the preflight response should be cached (in seconds)
    /*
    - Specifies how long the preflight response can be cached by the browser.
    - Example: `86400` seconds (24 hours) reduces the number of preflight requests.
    */
    res.header('Access-Control-Max-Age', '86400'); // Cache for 24 hours

    // If the request is a preflight (`OPTIONS`), respond with "204 No Content"
    if (req.method === 'OPTIONS') {
      // Respond with "No Content" for preflight requests
      /*
      `204 No Content`:
      - Indicates that the preflight request was successful but there is no content to send back.
      - This is the standard response for preflight requests.
      */
      return res.sendStatus(204); // No content
   }

      // For all other requests, proceed to the next middleware or route handler
      next();
});


// Define the `preflight/timestamp` route
router.get('/timestamp', (req, res) => {
   // Send the actual response
   res.send({ time: new Date() });
});

export default router;