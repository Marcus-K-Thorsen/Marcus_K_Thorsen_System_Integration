# How to setup

```bash
$ npm init -y
$ npm i express
```

Then add the following key-value pair in top-level of `package.json`:

```json
"type": "module"
```

# How to run

```bash
$ nodemon app.js
```

# How to run on local tunnel
Remember to have the app.js running

```bash
$ lt --port 8080 -s my-personal-app
```
