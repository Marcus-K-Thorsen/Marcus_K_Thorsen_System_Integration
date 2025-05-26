from fastapi import FastAPI, Form, File, UploadFile
import aiofiles
from typing import Optional
from datetime import datetime

app = FastAPI()

@app.post("/form")
def basic_form(username: str = Form(...), password: str = Form(default=..., min_length=8)):
    print(username, password)
    return { 
            "data":
                {
                    "username": username 
                }
    }



@app.post("/fileform")
async def file_form(file: UploadFile = File(...), description: Optional[str] = Form(None)):
    safe_filename = file.filename.replace("/", "_").replace("\\", "_")
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    unique_filename =f"{timestamp}__{safe_filename}"
    
    print("Uploading file...")  # Print something in general

    if description:
        print(f"Description provided: {description}")
    
    async with aiofiles.open("./uploads/"+unique_filename, "wb") as f:
        # := is the walrus operator
        while content := await file.read(1024): # read in chunks of 1024
            await f.write(content)
            
    return {
        "data": {
            "filename": unique_filename,
            "description": description if description else None
        }
    }

