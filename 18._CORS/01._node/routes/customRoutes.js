import express from 'express';

const router = express.Router();

// Custom CORS middleware
router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Set allowed origin
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT"); // Set allowed methods
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Set allowed headers
    res.setHeader("Access-Control-Expose-Headers", "X-Custom-Header"); // Set exposed headers
    next();
});

// Define custom routes
router.get("/timestamp", (req, res) => {
    res.send({ time: new Date() });
});

export default router;