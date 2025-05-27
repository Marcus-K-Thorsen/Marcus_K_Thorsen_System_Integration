# How to run the FastAPI server with Poetry and Uvicorn


**Start the FastAPI server using Uvicorn through Poetry:**
```sh
poetry run uvicorn main:app --reload
```

- The server will be available at [http://127.0.0.1:8000](http://127.0.0.1:8000)
- The `/` endpoint returns `{"data": "Hello world"}`
- The `/greetings` endpoint returns `{"data": "Welcome to my server"}`