# National News Summarizer

Full-stack thesis project that generates concise summaries from long-form news articles using NLP.

The pipeline is based on the [NASES](https://huggingface.co/ELiRF/NASES) architecture and is meant to support real-time summarization through a web interface. A dataset of Cuban news articles and human-written summaries was collected for evaluation and published on Kaggle as the Cuban News Dataset. Fine-tuning was not completed; the dataset was used to compare generated summaries with human-written ones.

## Project structure

```text
nn_summarizer/
├── nn_api/        FastAPI backend (NASES summarization)
└── nn_frontend/   Frontend for the summarizer UI
```

## Backend (`nn_api`)

FastAPI service that loads `ELiRF/NASES` and exposes a summarization endpoint.

- Docs: `http://localhost:8000/docs`
- CORS is configured for `http://localhost:3000`

```bash
cd nn_api
python -m venv venv
# Windows
venv\Scripts\activate
# macOS / Linux
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## Frontend (`nn_frontend`)

React (Create React App) UI for pasting an article and requesting a summary from the API. Run the backend first, then:

```bash
cd nn_frontend
npm install
npm start
```

The app runs at `http://localhost:3000` and posts to `http://127.0.0.1:8000/`.

## Notebooks

- [Data cleaning](https://colab.research.google.com/drive/1AFzIYheNcB5ZqO3fKKml7B5n-y8qLs7L?authuser=1)
- [Data preprocessing](https://colab.research.google.com/drive/1l9N20s43PSSu4sfQZUJc-YHe8B4w7i36?authuser=1)
