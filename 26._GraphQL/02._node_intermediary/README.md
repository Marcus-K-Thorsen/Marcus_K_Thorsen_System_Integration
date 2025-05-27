# How to setup

```sh
npm init -y
npm i express
npm i express-graphql
npm i graphql
```

Then add the following key-value pair in top-level of `package.json`:

```json
"type": "module"
```

# How to run

```sh
nodemon app.js
```

# What is this project about?

This project is a simple Node.js application that demonstrates how to use GraphQL with Express to manage movies and actors. You can query, add, and relate movies and actors using a GraphQL API.

It is called **"node intermediary"** because the Node.js server acts as an intermediary layer between the client and the underlying data, handling all GraphQL queries and mutations.