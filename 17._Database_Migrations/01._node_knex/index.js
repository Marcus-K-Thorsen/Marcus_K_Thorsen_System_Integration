import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import knex from "knex";
import knexConfig from "./knexfile.js";

// Emulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the .env file from the parent directory
config({ path: resolve(__dirname, "../.env") });

// Initialize Knex with the configuration
const db = knex(knexConfig);

// Test the connection by running a simple query
db.raw("SELECT 1+1 AS result")
  .then((result) => {
    console.log("Database connected successfully:", result[0]);
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  })
  .finally(() => {
    db.destroy(); // Close the database connection
  });
