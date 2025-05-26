# 19. Multipart Forms

This folder demonstrates how to handle different types of HTML forms and file uploads in both Node.js and Python web servers. It is designed to give you a practical overview of how form data is sent from the browser and processed by backend servers, which is a key topic in system integration.

## What are forms and multipart forms?

HTML forms are a primary way for users to send data to a server. There are several types of form encodings:

- **application/x-www-form-urlencoded**:  
  The default encoding for most forms. Data is sent as key-value pairs in the request body. Suitable for simple text data.

- **multipart/form-data**:  
  Used when your form includes file uploads. The data is split into "parts" so files and text fields can be sent together. This encoding is required for `<input type="file">`.

- **application/json**:  
  Not used by default in HTML forms, but common in APIs. Data is sent as a JSON object.

- **Nested Forms**:  
  The `nestedForms.html` file shows how to organize more complex form data using naming conventions like `user[name]` or `address[city]`. While you can't nest `<form>` tags in HTML, this approach lets you group related fields so the backend can interpret them as structured or nested data.

## How are these used in this project?

- **index.html** and **nestedForms.html**  
  These HTML files contain example forms:
  - Some use `application/x-www-form-urlencoded` for simple text fields.
  - Others use `multipart/form-data` to allow file uploads (images).
  - `nestedForms.html` demonstrates more complex/nested form structures.

- **01._node/**  
  Contains a Node.js project using Express and Multer:
  - Handles both simple form submissions and file uploads.
  - Uses `express.urlencoded()` for `x-www-form-urlencoded` data.
  - Uses Multer for `multipart/form-data` (file uploads).

- **02._python/**  
  Contains a Python project using FastAPI:
  - Handles both simple form submissions and file uploads.
  - Uses FastAPI's `Form` to extract form fields from both `x-www-form-urlencoded` and `multipart/form-data` requests.
  - Uses FastAPI's `File` and `python-multipart` for handling file uploads with `multipart/form-data`.

## Node.js vs Python (FastAPI): Key Differences

- **Node.js (Express + Multer):**
  - `express.urlencoded()` only parses `x-www-form-urlencoded` data.
  - Multer is required to handle `multipart/form-data` (file uploads).
  - Form fields sent with files (as `multipart/form-data`) are available in `req.body`, and files in `req.file`.

- **Python (FastAPI):**
  - FastAPI's `Form` works with both `x-www-form-urlencoded` and `multipart/form-data`.
  - FastAPI's `File` and `python-multipart` handle file uploads.
  - You can send form fields and files together, and FastAPI will extract both types easily.

## How to use

1. **Open** `index.html` or `nestedForms.html` in your browser.
2. **Fill out** a form and submit it.
3. The form sends data to either the Node.js or Python backend, depending on the form's `action` URL.
4. The backend receives and processes the data, saving uploaded files to the `uploads/` directory.

## Why is this important?

Understanding how different form encodings work—and how to handle them on the backend—is essential for building web applications that accept user input, especially when dealing with file uploads or integrating systems that exchange data in various formats.

This project gives you hands-on examples of:
- Sending and receiving simple form data.
- Uploading files using multipart forms.
- Handling these scenarios in both Node.js and Python environments.

## What about nested forms?

The `nestedForms.html` file shows how to organize more complex form data using naming conventions like `user[name]` or `address[city]`. While you can't nest `<form>` tags in HTML, this approach lets you group related fields so the backend can interpret them as structured or nested data.

In this project, submitting `nestedForms.html` lets you see how both Node.js and Python backends receive and parse grouped fields, making it easier to handle structured data from forms—useful for more advanced system integration scenarios.