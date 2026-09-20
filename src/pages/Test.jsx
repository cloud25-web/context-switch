import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    stage: "Recall",
    title: "Recall",
    question:
      "What is the fundamental idea behind Binary Search?",
    hint:
      "Think about what happens to the search space after every comparison.",
  },
  {
    stage: "Application",
    title: "Direct Application",
    question:
      "Given a sorted array [2, 5, 8, 12, 23, 31, 45], explain how you would find 23 using Binary Search.",
    hint:
      "Start with the middle element and explain what happens after each comparison.",
  },
  {
    stage: "Modification",
    title: "Modified Application",
    question:
      "A sorted array has been rotated. How would you adapt Binary Search to search for a target?",
    hint:
      "Think about how you can identify which half is still sorted.",
  },
  {
    stage: "Context Switch",
    title: "Context Transfer",
    question:
      "A factory needs to determine the minimum production capacity required to complete all its orders within 7 days. Explain how you would approach this problem.",
    hint:
      "Think about searching through possible answers rather than searching through an array.",
  },
];

function Test() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState(
    () => JSON.parse(localStorage.getItem("contextSwitchAnswers") || "[]")
  );

  const [showHint, setShowHint] = useState(false);

  const [isEvaluating, setIsEvaluating] = useState(false);

  const question = questions[currentQuestion];

  const currentAnswer =
    answers[currentQuestion]?.answer || "";

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerChange = (value) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = {
      stage: question.stage,
      question: question.question,
      answer: value,
    };

    setAnswers(updatedAnswers);

    localStorage.setItem(
      "contextSwitchAnswers",
      JSON.stringify(updatedAnswers)
    );
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setShowHint(false);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setShowHint(false);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = async () => {
    setIsEvaluating(true);

    try {
      const concept =
        localStorage.getItem("contextSwitchConcept") ||
        "Binary Search";

      const savedAnswers = JSON.parse(
        localStorage.getItem("contextSwitchAnswers") || "[]"
      );

      // Make sure the latest answer is included
      const finalAnswers = [...savedAnswers];

      finalAnswers[currentQuestion] = {
        stage: question.stage,
        question: question.question,
        answer: currentAnswer,
      };

      localStorage.setItem(
        "contextSwitchAnswers",
        JSON.stringify(finalAnswers)
      );

      console.log("Sending answers to Gemini:", {
        concept,
        answers: finalAnswers,
      });

      const response = await fetch("https://context-switch-7gee.onrender.com/api/evaluate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            concept: concept,
            answers: finalAnswers,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Evaluation failed with status ${response.status}`
        );
      }

      const result = await response.json();

      console.log("Gemini evaluation:", result);

      // Store Gemini's result for the Dashboard
      localStorage.setItem(
        "contextSwitchResults",
        JSON.stringify(result)
      );

      navigate("/dashboard");
    } catch (error) {
      console.error("Evaluation error:", error);

      alert(
        "Something went wrong while analyzing your answers. Please make sure the backend is running."
      );
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090f] text-white">

      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">

          <button
            onClick={() => navigate("/assess")}
            className="text-xl font-semibold tracking-tight"
          >
            Context<span className="text-indigo-400">Switch</span>
          </button>

          <div className="text-sm text-gray-400">
            Transfer Assessment
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">

        {/* Progress */}
        <div className="mb-10">

          <div className="flex items-center justify-between mb-3">

            <div>
              <p className="text-sm text-indigo-400 font-medium">
                Stage {currentQuestion + 1} of {questions.length}
              </p>

              <h1 className="text-2xl font-semibold mt-1">
                {question.title}
              </h1>
            </div>

            <span className="text-sm text-gray-500">
              {Math.round(progress)}%
            </span>

          </div>

          <div className="h-2 bg-white/10 rounded-full overflow-hidden">

            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />

          </div>

        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >

          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 shadow-2xl">

            {/* Stage badge */}
            <div className="flex items-center gap-2 mb-6">

              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">

                <span className="text-indigo-400 text-sm font-semibold">
                  {currentQuestion + 1}
                </span>

              </div>

              <span className="text-sm text-gray-400">
                {question.stage}
              </span>

            </div>

            {/* Question */}
            <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed mb-8">
              {question.question}
            </h2>

            {/* Answer */}
            <textarea
              value={currentAnswer}
              onChange={(e) =>
                handleAnswerChange(e.target.value)
              }
              placeholder="Explain your reasoning..."
              className="w-full min-h-[220px] resize-none bg-black/20 border border-white/10 rounded-2xl p-5 text-gray-200 placeholder-gray-600 outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/10 transition"
              disabled={isEvaluating}
            />

            {/* Hint */}
            <div className="mt-5">

              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition"
                disabled={isEvaluating}
              >
                <Lightbulb size={16} />

                {showHint ? "Hide hint" : "Need a hint?"}
              </button>

              {showHint && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-sm text-gray-400"
                >
                  {question.hint}
                </motion.div>
              )}

            </div>

          </div>

        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">

          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0 || isEvaluating}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={18} />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={isEvaluating}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-medium transition disabled:opacity-60 disabled:cursor-not-allowed"
          >

            {isEvaluating ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Analyzing transfer...
              </>
            ) : currentQuestion === questions.length - 1 ? (
              <>
                <CheckCircle2 size={18} />
                Finish Assessment
              </>
            ) : (
              <>
                Continue
                <ArrowRight size={18} />
              </>
            )}

          </button>

        </div>

        {/* Evaluation message */}
        {isEvaluating && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-400">
              Gemini is analyzing how well you transferred the
              concept across different contexts...
            </p>
          </motion.div>
        )}

      </main>
    </div>
  );
}

export default Test;