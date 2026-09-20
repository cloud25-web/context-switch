from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import EvaluationRequest
from evaluator import evaluate_answers


app = FastAPI(
    title="ContextSwitch API",
    description="AI-powered knowledge transfer assessment API",
    version="1.0.0",
)


# --------------------------------------------------
# CORS
# --------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --------------------------------------------------
# Basic routes
# --------------------------------------------------

@app.get("/")
def root():

    return {
        "message": "ContextSwitch API is running"
    }


@app.get("/api/health")
def health_check():

    return {
        "status": "healthy",
        "service": "ContextSwitch Backend"
    }


# --------------------------------------------------
# Evaluation endpoint
# --------------------------------------------------

@app.post("/api/evaluate")
def evaluate(request: EvaluationRequest):

    result = evaluate_answers(
        request.concept,
        request.answers
    )

    return result