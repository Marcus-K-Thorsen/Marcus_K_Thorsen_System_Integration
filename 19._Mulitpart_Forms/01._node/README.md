# How to setup

```bash
$ npm init -y
$ npm i express
$ npm i multer
```

Then add the following key-value pair in top-level of `package.json`:

```json
"type": "module"
```

# How to run

```bash
$ nodemon app.js
```

The server will run on port 8080 by default (or the port specified in the `PORT` environment variable).

# What this app does

This app is a simple Express server that demonstrates handling multipart form data and file uploads using the `multer` middleware. It allows you to:

- Submit regular form data via POST requests.
- Upload files (images only) via multipart/form-data POST requests.

Uploaded files are saved to the `uploads` directory with a unique filename.

# Available endpoints

- **POST `/form`**  
  Accepts URL-encoded form data.  
  Example usage:  
  Send a POST request with form fields (e.g., using Postman or an HTML form with `application/x-www-form-urlencoded` encoding).  
  The server will log the form data, remove any `password` field, and return the rest of the data as JSON.

- **POST `/fileform`**  
  Accepts multipart form data with a file field named `file`.  
  Only image files (`.png`, `.svg`, `.jpeg`) are allowed.  
  Example usage:  
  Send a POST request with a file attached under the field name `file` (e.g., using Postman or an HTML form with `enctype="multipart/form-data"`).  
  The server will save the file to the `uploads` directory and respond with an empty JSON object.

# Notes

- Make sure the `uploads` directory exists in the project root, or create it before uploading files.
- The server will reject files that are not images (`png`, `svg`, `jpeg`).
  

# What is Multer?

Multer is a middleware for Express.js that handles `multipart/form-data`, which is primarily used for uploading files. In this project, Multer processes incoming file uploads and saves them to the `uploads` directory, making it easy to handle files sent from forms or API clients.