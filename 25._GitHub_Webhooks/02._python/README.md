# How to run

**Start the Python server**

```bash
$ poetry run uvicorn main:app --reload
```


**Expose your local server to the internet**

```bash
$ lt -l 127.0.0.1 --port 8000 --subdomain my-py-github-webhook
```

**Set up the webhook on GitHub**

   - Go to your repository on GitHub.
   - Click **Settings** > **Webhooks** > **Add webhook**.
   - In the **Payload URL** field, enter your public LocalTunnel URL followed by your webhook endpoint path, for example:  
        - For JSON payloads:  
          `https://my-py-github-webhook.loca.lt/githubwebhookjson`
        - For FORM payloads:  
          `https://my-py-github-webhook.loca.lt/githubwebhookform`
   - **Set the Content type according to the endpoint:**
        - Use (JSON Pauloads) `application/json` for the `/githubwebhookjson` endpoint.
        - Use (FORM Payloads) `application/x-www-form-urlencoded` for the `/githubwebhookform` endpoint.
   - Select the events you want GitHub to send (e.g., just push events or all events).
   - Click **Add webhook** to save.

**Test the webhook**

   - Perform an action in your repository that triggers the webhook (such as pushing a commit).
   - Check your running Python server’s terminal to see if it receives the webhook payload.