from pydantic import BaseModel
from typing import List


class Answer(BaseModel):
    stage: str
    question: str
    answer: str


class EvaluationRequest(BaseModel):
    concept: str
    answers: List[Answer]