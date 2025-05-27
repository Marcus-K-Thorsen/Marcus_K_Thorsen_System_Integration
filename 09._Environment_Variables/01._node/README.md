# How to setup

```bash
$ npm init -y
$ npm i dotenv
```

Then add the following key-value pair in top-level of `package.json`:

```json
"type": "module"
```

# How to run

```bash
$ node index.js
```

## JavaScript: Two ways to use dotenv

There are two main ways to load environment variables from a `.env` file using dotenv:

### 1. Explicit import and config

```js
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.MY_SECRET);
```
- You import the `dotenv` module and call `dotenv.config()` yourself.
- This gives you more control (for example, you can pass options or load the `.env` file at a specific point in your code).

### 2. Automatic config with import

```js
import "dotenv/config";

console.log(process.env.MY_SECRET);
```
- This automatically loads dotenv’s config as soon as the file is imported.
- It’s concise and good for simple scripts.

**Note:**  
Both methods load environment variables into `process.env`.  
The first is explicit and flexible; the second is automatic and concise.  
Use one or the other, not both at the same time.