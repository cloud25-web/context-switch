import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def evaluate_answers(concept, answers):

    prompt = f"""
You are an expert educational assessment evaluator.

Your job is to evaluate whether a student can TRANSFER knowledge
of a concept to increasingly unfamiliar situations.

Concept:
{concept}

Student answers:

{json.dumps([answer.model_dump() for answer in answers], indent=2)}

Evaluate the student's performance across these four stages:

1. Recall
- Does the student understand the fundamental concept?
- Is the explanation conceptually correct?

2. Application
- Can the student apply the concept to a standard problem?
- Is their reasoning correct?

3. Modification
- Can the student adapt the concept when the problem structure changes?

4. Context Transfer
- Can the student recognize and apply the concept in an unfamiliar
  real-world context?

Score each stage from 0 to 100.

Important:
- Evaluate reasoning, not merely answer length.
- A long but incorrect answer should receive a low score.
- A concise but correct answer can receive a high score.
- Do not assume understanding if the answer does not demonstrate it.
- Be fair to a beginner student.

Calculate transfer_gap as true if the Recall score is at least
20 points higher than the Context Transfer score.

Return ONLY valid JSON.

Use exactly this structure:

{{
    "concept": "{concept}",
    "scores": {{
        "recall": 0,
        "application": 0,
        "modification": 0,
        "transfer": 0
    }},
    "transfer_gap": false,
    "analysis": "2-3 sentence explanation of the student's transfer ability.",
    "recommendation": "A specific recommendation for what the student should practice next."
}}
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )

    text = response.text.strip()

    # Remove markdown code fences if Gemini adds them
    if text.startswith("```"):
        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

    result = json.loads(text)

    return result