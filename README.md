# National News Summarizer

Full-stack thesis project that generates concise summaries from long-form news articles using NLP.

The pipeline is based on the [NASES](https://huggingface.co/ELiRF/NASES) architecture and is meant to support real-time summarization through a web interface. A dataset of Cuban news articles and human-written summaries was collected for evaluation and published on Kaggle as the Cuban News Dataset. Fine-tuning was not completed; the dataset was used to compare generated summaries with human-written ones.

## Project structure

```text
nn_summarizer/
├── nn_api/        FastAPI backend (NASES summarization)
└── nn_frontend/   React UI
```

Install dependencies once per machine. After that, only start the servers.

## Backend (`nn_api`)

FastAPI service that loads `ELiRF/NASES` and exposes a summarization endpoint.

- Docs: http://127.0.0.1:8000/docs
- CORS is configured for `http://localhost:3000`

### One-time setup

Needs Python 3.12+. On Windows, create `.venv` (do not reuse a `venv` folder copied from macOS/Linux).

```bash
cd nn_api
python -m venv .venv
```

Windows:

```bash
.venv\Scripts\python.exe -m pip install -r requirements.txt
```

If PyTorch does not install from `requirements.txt`, install the CPU build:

```bash
.venv\Scripts\python.exe -m pip install torch --index-url https://download.pytorch.org/whl/cpu
```

macOS / Linux:

```bash
source .venv/bin/activate
pip install -r requirements.txt
```

### Run

Windows (from `nn_api`):

```bash
.\run.bat
```

macOS / Linux:

```bash
cd nn_api
source .venv/bin/activate
uvicorn main:app --reload
```

The first start downloads the NASES model (~1.7 GB). Later starts reuse that download. Leave this terminal open while you use the app.

## Frontend (`nn_frontend`)

React (Create React App) UI for pasting an article and requesting a summary. Needs Node.js LTS ([nodejs.org](https://nodejs.org)). Start the backend first.

### One-time setup

```bash
cd nn_frontend
npm install
```

On Windows PowerShell, if `npm` is blocked by the execution policy:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Or use `npm.cmd` instead of `npm`.

### Run

```bash
cd nn_frontend
npm start
```

The app runs at http://localhost:3000 and posts to http://127.0.0.1:8000/. Paste an article of at least 80 characters, then click **Resumir**.

## Notebooks

- [Data cleaning](https://colab.research.google.com/drive/1AFzIYheNcB5ZqO3fKKml7B5n-y8qLs7L?authuser=1)
- [Data preprocessing](https://colab.research.google.com/drive/1l9N20s43PSSu4sfQZUJc-YHe8B4w7i36?authuser=1)
