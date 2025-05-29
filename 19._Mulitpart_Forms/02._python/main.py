from fastapi import FastAPI, Form, File, UploadFile, HTTPException
import aiofiles
from typing import Optional
from datetime import datetime
import os

app = FastAPI()

# Shared constants
UPLOAD_DIR = "./uploads/"
MAX_SIZE = 3 * 1024 * 1024  # 3MB
VALID_TYPES = ["image/png", "image/svg", "image/jpeg"]


def is_not_valid_mime_type(file: UploadFile) -> bool:
    mime_type = file.content_type
    return mime_type is None or mime_type not in VALID_TYPES

def get_unique_filename(file: UploadFile) -> str:
    filename = file.filename
    if filename is None or filename.strip() == "":
        raise HTTPException(status_code=400, detail="Filename cannot be empty")
    safe_filename = filename.replace("/", "_").replace("\\", "_").replace(" ", "_")
    safe_filename = safe_filename.replace(":", "_").replace("?", "_").replace("*", "_")
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    return f"{timestamp}__{safe_filename}"

async def save_file(file: UploadFile, unique_filename: str) -> None:
    total_size = 0
    file_path = UPLOAD_DIR + unique_filename
    async with aiofiles.open(file_path, "wb") as f:
        content = await file.read(1024) # Read in chunks of 1024 bytes
        while content:
            total_size += len(content)
            if total_size > MAX_SIZE:
                await f.close()
                os.remove(file_path)
                raise HTTPException(status_code=400, detail=f"File too large (max {MAX_SIZE}MB)")
            await f.write(content)
            content = await file.read(1024)


@app.post("/form")
def basic_form(username: str = Form(...), password: str = Form(default=..., min_length=8)):
    print(username, password)
    return { 
            "data": {
                "username": username 
            }
    }


@app.post("/fileform")
async def file_form(file: UploadFile = File(...), description: Optional[str] = Form(None)):
    print(f"Uploading file: '{file.filename}' to the system...")

    if description:
        print(f"Description provided: {description}")

    if is_not_valid_mime_type(file):
        raise HTTPException(status_code=400, detail=f"Invalid file type: {file.content_type}")

    unique_filename = get_unique_filename(file)
    await save_file(file, unique_filename)
    
    print(f"File saved as: {unique_filename}")

    return {
        "data": {
            "filename": unique_filename,
            "description": description if description else None
        }
    }
