# 🛡️ PhishAlert

**PhishAlert** is a browser extension powered by an LLM-backed FastAPI server that helps users identify potentially **phishing** emails directly from their inbox. With just a right-click, users can check if an email is suspicious — using intelligent language analysis in real time.

---

## 🔍 Features

- ✅ Right-click context menu in your email client to check messages
- 🧠 Uses a local Large Language Model (LLM) via `ollama` for email analysis
- 🚀 FastAPI-based backend server for handling extension requests
- ⚙️ Lightweight and privacy-conscious — runs locally
- 💡 Easy to use and integrates directly into the browser UI

---

## 🛠️ How It Works

1. User right-clicks on an email body and clicks **"Check for Phishing"**.
2. The extension sends the email text to a local FastAPI server.
3. The server uses `ollama` with the `mistral` model to analyze the content.
4. A result is returned and shown to the user instantly via a popup.

---

## 📦 Tech Stack

- **Frontend:** Browser Extension (Manifest V3)
- **Backend:** Python + FastAPI
- **Model Serving:** [`ollama`](https://ollama.com) running Mistral LLM locally
- **Language Model:** `mistral` (can be swapped for other LLMs)

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/MayurPD28/PhishAlert.git
cd PhishAlert
```
### 2. Set Up the Backend
```bash
cd phishalert_backend
python -m venv phishalert_env
phishalert_env\Scripts\activate  # On Windows
pip install -r requirements.txt
uvicorn server:app --reload
```
Make sure ollama is installed and running:

```bash
ollama run mistral
```
📌 Backend runs at http://localhost:8000

### 3. Load the Extension in Chrome
Go to chrome://extensions/

Enable Developer Mode

Click "Load unpacked"

Select the phishalert_extension folder

📁 Folder Structure
```
PhishAlert/
├── phishalert_backend/
│   ├── server.py
│   ├── requirements.txt
│   └── ...
├── phishalert_extension/
│   ├── manifest.json
│   ├── background.js
│   ├── popup.html
│   └── ...
└── README.md
```
⚙️ Dependencies
Install backend dependencies using:

```bash
pip install -r requirements.txt
```
Main libraries used:

fastapi

uvicorn

subprocess (for calling ollama)

ollama (you must install it separately from https://ollama.com)

### ✨ Demo

Select any email text or any suspicious text on any website, right click and select "check for Phishing with PhishAlert"
Wait for few seconds, you will get a Verdict and a Analysis as shown below:
![Screenshot (277)](https://github.com/user-attachments/assets/92f8e4be-0c5c-446d-ae09-ab5709204ac1)


🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss.

📄 License
MIT License

🙋‍♂️ Author

Mayur Pratim Das
