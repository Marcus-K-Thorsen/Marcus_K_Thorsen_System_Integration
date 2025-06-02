// import "dotenv/config";

import dotenv from 'dotenv';
import fs from 'fs';

// OS
//console.log("All OS Level variables:", process.env);

console.log();

// OS: Before loading .env
console.log("OS Level API_KEY:", process.env["API_KEY"] || "Not Found in OS");

console.log();

// Process: After loading .env with dotenv
dotenv.config();
console.log("Process Level API_KEY:", process.env["API_KEY"]);


console.log();

// Runtime: Read .env file directly (not in process.env)
const envFile = fs.readFileSync(".env", "utf-8");
const runtimeConfig = Object.fromEntries(
  envFile
    .split('\n')
    .filter(line => line && !line.startsWith('#'))
    .map(line => line.split('='))
);
console.log("Runtime Level MY_SECRET:", runtimeConfig["MY_SECRET"]);

console.log();

