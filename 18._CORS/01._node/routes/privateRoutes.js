import express from 'express';
import cors from 'cors';

const router = express.Router();

// Apply CORS middleware for private routes
router.use(cors({
    origin: "http://localhost:3000", // Allow requests only from this origin
    methods: ["GET"], // Allow only GET requests
    credentials: true, // Allow cookies or credentials
}));

// Define private routes
router.get("/timestamp", (req, res) => {
    res.send({ time: new Date() });
});

export default router;