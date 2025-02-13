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
$ nodemon index.js
```

## JavaScript: Two ways to use dotenv

```js
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env.MY_SECRET);
```

Or:

```js
import "dotenv/config";

console.log(process.env.MY_SECRET);
```
