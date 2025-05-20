from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import subprocess

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/check")
async def check_email(request: Request):
    data = await request.json()
    email_text = data.get("email_text", "")

    prompt = f"""
You are a cybersecurity expert. Analyze the email below and determine if it is a phishing attempt.

Return in this format:
- Verdict: [Phishing/Safe]
- Reason: [Short explanation]

Email:
\"\"\"
{email_text}
\"\"\"
"""
    try:
        result = subprocess.run(
            [r"C:\Users\mayur\AppData\Local\Programs\Ollama\ollama.exe", "run", "mistral", prompt],
            capture_output=True,
            text=True,
            check=True
        )
        return {"result": result.stdout.strip()}
    except subprocess.CalledProcessError as e:
        return {"result": f"Error: {e.stderr}"}
