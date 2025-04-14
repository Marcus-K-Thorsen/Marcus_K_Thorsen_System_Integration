// Function to log CORS-related request and response details
export function logRequestAndResponse(req, res, next) {
    console.log("========== Incoming Request ==========");
    console.log("Request Method:", req.method); // Logs the HTTP method (e.g., GET, POST)
    console.log("Request URL:", req.url); // Logs the requested URL

    // Log the Origin header from the request
    // This shows where the request is coming from
    const requestOrigin = (req.headers.origin === "null") ? "No Origin (same-origin or file://)" : req.headers.origin;
    console.log("Request Origin:", requestOrigin);

    // Log the Access-Control-Request-Method header (for preflight requests)
    // This indicates which HTTP method the client wants to use
    if (req.headers['access-control-request-method']) {
        console.log("Access-Control-Request-Method:", req.headers['access-control-request-method']);
    }

    // Log the Access-Control-Request-Headers header (for preflight requests)
    // This shows which custom headers the client wants to send
    if (req.headers['access-control-request-headers']) {
        console.log("Access-Control-Request-Headers:", req.headers['access-control-request-headers']);
    }

    console.log("======================================");

    const originalSend = res.send;
    let hasLoggedResponse = false;

    res.send = function (body) {
        if (!hasLoggedResponse) {
            console.log("========== Outgoing Response =========");
            // Log the Access-Control-Allow-Origin header in the response
            // This shows which origins are allowed to access the resource
            console.log("Access-Control-Allow-Origin:", res.getHeader("Access-Control-Allow-Origin") || "Not Set");

            // Log the Access-Control-Allow-Methods header in the response
            // This shows which HTTP methods are allowed
            console.log("Access-Control-Allow-Methods:", res.getHeader("Access-Control-Allow-Methods") || "Not Set");

            // Log the Access-Control-Allow-Headers header in the response
            // This shows which custom headers are allowed
            console.log("Access-Control-Allow-Headers:", res.getHeader("Access-Control-Allow-Headers") || "Not Set");

            console.log("======================================");
            hasLoggedResponse = true;
        }
        originalSend.call(this, body);
    };

    next();
};




// Middleware to set CORS headers
export function setCorsHeaders(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};
