from fastapi import FastAPI
import requests
import urllib.request
import json

app = FastAPI()


@app.get("/fastapiData")
def get_fast_api_data():
    return { "data": "Data from FastAPI" }

@app.get("/requestExpressData/urllib")
def request_express_data():
    # Make a request to Express server
    # And return the data
    
    with urllib.request.urlopen("http://127.0.0.1:8080/expressData") as response:
        data = json.loads(response.read().decode())
        data["from"] = "FastAPI using urllib libary"
    return data

@app.get("/requestExpressData/requests")
def request_express_data_requests():
    # Make a request to Express server
    # And return the data
    
    response = requests.get("http://127.0.0.1:8080/expressData")
    data = response.json()
    data["from"] = "FastAPI using requests libary"
    return data