# How to setup

```bash
$ poetry init -n
$ poetry add fastapi uvicorn aiofiles python-multipart
```

# How to run

```bash
$ poetry run uvicorn main:app --reload
```

# Accessing the running FastAPI project

Once the server is running, you can access the FastAPI app at [http://127.0.0.1:8000](http://127.0.0.1:8000).

The automatic interactive API documentation is available at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

# Available endpoints

- **POST `/form`**  
  Accepts regular form data (e.g., from an HTML form with `application/x-www-form-urlencoded`).  
  Returns the submitted form data as JSON, excluding any sensitive fields if implemented.

- **POST `/fileform`**  
  Accepts multipart form data with a file field (e.g., from an HTML form with `enctype="multipart/form-data"`).  
  Saves the uploaded file to the `uploads` directory and returns a response indicating success.

# What is python-multipart?

The `python-multipart` library is a dependency used by FastAPI to handle `multipart/form-data` requests, which are required for file uploads. It allows FastAPI to parse incoming form data that includes files, making it possible to receive and process file uploads in your endpoints.