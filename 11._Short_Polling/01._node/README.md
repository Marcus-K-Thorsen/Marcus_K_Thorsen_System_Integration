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

# About Short Polling

**Short polling** is a technique where the client repeatedly sends requests to the server at regular intervals to check for new data or updates. In the `11._Short_Polling` example, the browser fetches the latest random numbers from the server every 6 seconds using JavaScript's `setInterval` and `fetch` in `public/index.html`. This approach is simple to implement but can create unnecessary server load if polled too frequently.
