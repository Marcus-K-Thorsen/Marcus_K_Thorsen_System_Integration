// import "dotenv/config";

import dotenv from 'dotenv';
dotenv.config();


console.log();

// Print API_KEY using process.env (similar to os.getenv in Python)
console.log("process.env['API_KEY']:", process.env["API_KEY"]);

// Print MY_SECRET using process.env (similar to dotenv_values in Python)
console.log("process.env['MY_SECRET']:", process.env["MY_SECRET"]);

console.log();

// Print all environment variables on OS Level
//console.log("All environment variables:", process.env);