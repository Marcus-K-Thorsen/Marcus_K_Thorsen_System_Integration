import express from 'express';
import cors from 'cors';

const router = express.Router();

// Apply CORS middleware for public routes
router.use(cors({
    origin: "*", // Allow requests from any origin
    methods: ["GET", "POST"], // Allow GET and POST requests
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
}));

// Define public routes
router.get("/timestamp", (req, res) => {
    res.send({ time: new Date() });
});

export default router;