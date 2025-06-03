from fastapi import FastAPI, Request, Response
import json

app = FastAPI()


@app.post("/githubwebhookjson")
async def github_webhook(request: Request):
    data = await request.body()
    parsed = json.loads(data)
    print(json.dumps(parsed, indent=2))  # Pretty print JSON
    return


@app.post("/githubwebhookform")
async def github_webhook(request: Request, response: Response):
    if request.headers.get("content-type") == "application/x-www-form-urlencoded":
        form_data = await request.form()
        payload = form_data['payload']
        parsed = json.loads(payload)
        print(json.dumps(parsed, indent=2))  # Pretty print JSON
        response.status_code = 200
    else: 
        response.status_code = 400
