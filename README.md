
# ContextSwitch 🧠

### Don't test what you memorized. Test what you can transfer.

ContextSwitch is an AI-powered knowledge transfer assessment platform that evaluates whether learners can apply what they know when the **context, structure, or problem changes**.

Traditional assessments often focus on recall and familiar problem-solving patterns. ContextSwitch progressively changes the context of a concept to identify the gap between **knowing something** and **being able to transfer it**.

---

## 🚀 Live Demo

🔗 **Coming Soon**

---

## 🎯 Problem Statement

A learner may be able to:

- Define a concept
- Recognize a familiar question
- Solve a textbook example

…but struggle when the same underlying concept appears in an unfamiliar situation.

Most assessments do not explicitly measure this **knowledge-transfer gap**.

---

## 💡 Proposed Solution

ContextSwitch progressively challenges a learner through four stages:

**Recall → Direct Application → Modified Application → Context Transfer**

As the context becomes less familiar, the learner has fewer obvious clues about which concept to use.

The AI evaluates the learner's reasoning across these stages and generates a **Transfer Profile** highlighting areas of strength and potential transfer gaps.

---

## ✨ Key Features

- 🧠 **Progressive Assessment**  
  Tests the same underlying concept through increasingly different contexts.

- 🔄 **Knowledge Transfer Analysis**  
  Examines how performance changes as the problem moves away from familiar patterns.

- 🤖 **AI-Powered Evaluation**  
  Uses Google Gemini to evaluate reasoning rather than simply checking the final answer.

- 📊 **Transfer Profile**  
  Visualizes performance across different assessment stages.

- 🎯 **Personalized Recommendations**  
  Suggests what the learner should practice next based on their performance.

---

## 🔥 Example

### Concept: Binary Search

**1. Recall**

> What is the basic idea behind binary search?

**2. Direct Application**

> Find 23 in a sorted array using binary search.

**3. Modified Application**

> How would you adapt binary search for a rotated sorted array?

**4. Context Transfer**

> A factory needs to determine the minimum production capacity required to complete orders within 7 days. How could a similar search strategy be used?

The underlying reasoning remains relevant while the **surface context changes**.

This tests whether the learner can recognize and transfer the underlying idea rather than simply recognize a familiar question pattern.

---

## 🏗️ Technical Architecture

```text
                    ┌───────────────┐
                    │     User      │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ React + Vite  │
                    │  Frontend UI  │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │    FastAPI    │
                    │    Backend    │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │ Google Gemini │
                    │ AI Evaluation │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │   Transfer    │
                    │   Analysis    │
                    └───────┬───────┘
                            ↓
                    ┌───────────────┐
                    │   Dashboard   │
                    └───────────────┘
````

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Framer Motion
* Lucide React
* React Router

### Backend

* Python
* FastAPI
* Pydantic
* Uvicorn

### AI

* Google Gemini API

### Storage

* LocalStorage
* In-memory processing

---

## 📂 Project Structure

```text
context-switch/
│
├── backend/
│   ├── evaluator.py
│   ├── main.py
│   ├── models.py
│   ├── requirements.txt
│   ├── .env.example
│   └── .gitignore
│
├── public/
│
├── src/
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Assessment.jsx
│   │   ├── Test.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/cloud25-web/context-switch.git
cd context-switch
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

### 4. Setup the backend

Open a new terminal:

```bash
cd context-switch/backend
```

Create a virtual environment:

```bash
python3 -m venv venv
```

Activate it:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

### 5. Configure Gemini API

Create a `.env` file inside `backend/`:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 6. Start the backend

```bash
python -m uvicorn main:app --reload --port 8000
```

The API will be available at:

```text
http://127.0.0.1:8000
```

Interactive API documentation:

```text
http://127.0.0.1:8000/docs
```

> **Security:** Never commit your `.env` file or Gemini API key to GitHub.

---

## 🎮 Demo Flow

```text
1. Open ContextSwitch
        ↓
2. Enter a concept
        ↓
3. Start assessment
        ↓
4. Answer four progressive questions
        ↓
5. AI evaluates the responses
        ↓
6. View Transfer Profile
        ↓
7. Receive next-practice recommendation
```

---

## 📊 Transfer Profile

The dashboard provides an experimental view of performance across different levels of contextual distance.

```text
Concept Understanding      92%
Direct Application         86%
Modified Application       74%
Context Transfer           48%

            ↓

       TRANSFER GAP
```

The goal is not simply to produce a score, but to help identify **where knowledge stops transferring effectively**.

---

## 🎯 Current MVP

The current prototype demonstrates:

* Concept-based assessment
* Four-stage transfer progression
* AI-powered answer evaluation
* Transfer gap identification
* Performance visualization
* Personalized next-step recommendation

The current demonstration primarily uses **Binary Search** as the example concept.

---

## 🚀 Future Roadmap

### Dynamic Assessment Generation

Generate new assessment questions for different concepts and domains.

### Adaptive Difficulty

Adjust challenge difficulty based on previous performance.

### Long-Term Transfer Tracking

Track how knowledge transfer develops across multiple sessions.

### Multi-Modal Assessment

Support code, diagrams, simulations, and real-world scenarios.

### Educator Dashboard

Allow educators to identify common transfer gaps across a class.

### LMS & EdTech Integration

Provide APIs for integration with existing learning platforms.

### AI Practice Coach

Convert identified transfer gaps into targeted practice sessions.

---

## 🌍 Potential Applications

ContextSwitch can be extended beyond programming to areas such as:

* Mathematics
* Computer Science
* Science
* Business
* Professional skills
* Technical training
* Interview preparation

---

## ⚠️ Disclaimer

ContextSwitch provides an **experimental indicator of transfer performance** based on generated assessment tasks.

The resulting scores should not be interpreted as a definitive measurement of a learner's overall knowledge, ability, or intelligence.

---

## 👥 Team

Built with ❤️ for the hackathon.

### ContextSwitch

> **Don't test what you memorized.
> Test what you can transfer.**


