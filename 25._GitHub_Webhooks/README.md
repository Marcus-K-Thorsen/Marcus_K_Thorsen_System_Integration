# GitHub Webhooks – Quick Guide

## What are Webhooks?

A **webhook** is a way for one system to send real-time data to another system as soon as an event happens. Instead of constantly checking (polling) for updates, a webhook lets a service "call you back" with a payload of data when something important occurs.  
Think of it as a "reverse API": instead of you asking for data, the server pushes data to you.

## What are GitHub Webhooks?

**GitHub webhooks** let you receive notifications from GitHub when certain events happen in a repository (like pushes, pull requests, releases, etc.).  
When you set up a webhook, GitHub will send an HTTP POST request to your server every time the chosen event occurs.

---

## How to Use the Example Node.js and Python Webhook Receivers

This project contains two simple servers you can use to receive GitHub webhook events:

- **Node.js:** [`25._GitHub_Webhooks/01._node/app.js`](25._GitHub_Webhooks/01._node/app.js)
- **Python (FastAPI):** [`25._GitHub_Webhooks/02._python/main.py`](25._GitHub_Webhooks/02._python/main.py)

### 1. Start the Webhook Receiver

#### **Node.js (Express)**
1. Open a terminal and navigate to the Node.js folder:
    ```sh
    cd 25._GitHub_Webhooks/01._node
    ```
2. Start the server:
    ```sh
    nodemon app.js
    ```
   The server will listen on port 8080 by default.

#### **Python (FastAPI)**
1. Open a terminal and navigate to the Python folder:
    ```sh
    cd 25._GitHub_Webhooks/02._python
    ```
2. Start the FastAPI server:
    ```sh
    poetry run uvicorn main:app --reload
    ```
   The server will listen on port 8000 by default.

---

### 2. Expose Your Local Server to the Internet

GitHub needs to reach your local server. Use a tool like `LocalTunnel` to create a public URL:

```sh
lt -l 127.0.0.1 --port 8080 --subdomain my-js-github-webhook   # For Node.js
lt -l 127.0.0.1 --port 8000 --subdomain my-py-github-webhook   # For Python
```

Copy the generated public URL (for example, `https://my-js-github-webhook.loca.lt` or `https://my-js-github-webhook.loca.lt`).

---

### 3. Set Up the Webhook on GitHub

1. Go to your repository on GitHub.
2. Click **Settings** > **Webhooks** > **Add webhook**.
3. In the **Payload URL** field, paste your localtunnel public URL and add the correct endpoint:
    - For JSON payloads:  
      `https://my-js-github-webhook.loca.lt/githubwebhookjson`
    - For form payloads:  
      `https://my-py-github-webhook.loca.lt/githubwebhookform`
4. Set the **Content type** to `application/json` (for `/githubwebhookjson`) or `application/x-www-form-urlencoded` (for `/githubwebhookform`).
5. Choose which events you want to receive (e.g., "Just the push event" or "Send me everything").
6. Click **Add webhook** to save.

---

### 4. Test the Webhook

- Trigger an event in your repository (like pushing a commit).
- Watch your terminal where the Node.js or Python server is running. You should see the webhook payload printed out.

---
