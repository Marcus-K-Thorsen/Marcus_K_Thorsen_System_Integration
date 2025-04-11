import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// Emulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the .env file from the parent directory
config({ path: resolve(__dirname, "../.env") });

/**
 * @type { import("knex").Knex.Config }
 */
export default {
  client: "mysql2",
  connection: {
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations", // Optional: Specify where migration files are stored
  },
  seeds: {
    directory: "./seeds", // Optional: Specify where seed files are stored
  },
};
