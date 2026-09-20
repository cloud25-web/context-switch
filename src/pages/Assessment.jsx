import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  FileText,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Assessment() {
  const navigate = useNavigate();

  const [concept, setConcept] = useState("");
  const [notes, setNotes] = useState("");
  const [mode, setMode] = useState("concept");

  const popularConcepts = [
    "Binary Search",
    "Recursion",
    "Arrays",
    "SQL",
    "Machine Learning",
  ];

  const handleStart = () => {
    const selectedConcept = concept.trim() || "Binary Search";

    // Save the selected concept so the assessment page
    // can use it later.
    localStorage.setItem("contextSwitchConcept", selectedConcept);

    if (notes.trim()) {
      localStorage.setItem("contextSwitchNotes", notes);
    }

    navigate("/test");
  };

  return (
    <div className="min-h-screen bg-[#080812] text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <nav className="relative z-10 border-b border-white/10 bg-[#080812]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500">
              <Brain size={19} />
            </div>

            <div>
              <p className="font-semibold tracking-tight">
                Context<span className="text-indigo-400">Switch</span>
              </p>

              <p className="text-[9px] uppercase tracking-widest text-slate-500">
                Knowledge Transfer Lab
              </p>
            </div>
          </Link>

          <div className="text-sm text-slate-500">
            Step <span className="text-white">1</span> of 2
          </div>

        </div>
      </nav>

      {/* MAIN */}
      <main className="relative z-10 mx-auto max-w-4xl px-6 py-16 md:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
            <Sparkles size={22} />
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
            Start your assessment
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            What do you want to test?
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 md:text-base">
            Choose something you've learned. ContextSwitch will gradually
            change the problem context to see how well you can transfer it.
          </p>
        </motion.div>

        {/* MODE SWITCH */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-12 flex max-w-md rounded-xl border border-white/10 bg-white/[0.025] p-1"
        >
          <button
            onClick={() => setMode("concept")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm transition ${
              mode === "concept"
                ? "bg-white text-black"
                : "text-slate-500 hover:text-white"
            }`}
          >
            <BookOpen size={16} />
            Enter Concept
          </button>

          <button
            onClick={() => setMode("notes")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm transition ${
              mode === "notes"
                ? "bg-white text-black"
                : "text-slate-500 hover:text-white"
            }`}
          >
            <FileText size={16} />
            Paste Notes
          </button>
        </motion.div>

        {/* INPUT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:p-8"
        >

          {mode === "concept" ? (
            <>
              <label className="text-sm font-medium text-slate-300">
                Concept
              </label>

              <div className="mt-3">
                <input
                  value={concept}
                  onChange={(e) => setConcept(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleStart();
                    }
                  }}
                  placeholder="e.g. Binary Search"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/10"
                />
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-widest text-slate-600">
                  Try a concept
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {popularConcepts.map((item) => (
                    <button
                      key={item}
                      onClick={() => setConcept(item)}
                      className={`rounded-full border px-3 py-2 text-xs transition ${
                        concept === item
                          ? "border-indigo-400/30 bg-indigo-400/10 text-indigo-300"
                          : "border-white/10 bg-white/[0.02] text-slate-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <label className="text-sm font-medium text-slate-300">
                Your learning material
              </label>

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Paste your notes, lecture material, or anything you've learned..."
                className="mt-3 min-h-52 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-400/10"
              />

              <p className="mt-3 text-xs text-slate-600">
                The AI will identify the key concepts and build your
                assessment around them.
              </p>
            </>
          )}

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Sparkles size={14} className="text-indigo-400" />
              4-stage progressive assessment
            </div>

            <button
              onClick={handleStart}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-indigo-100 sm:w-auto"
            >
              Continue
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </button>

          </div>
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid gap-3 sm:grid-cols-3"
        >
          {[
            ["01", "Recall", "Can you remember it?"],
            ["02", "Apply", "Can you use it?"],
            ["03", "Transfer", "Can you recognize it elsewhere?"],
          ].map(([number, title, description]) => (
            <div
              key={number}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
            >
              <span className="text-xs text-indigo-400">{number}</span>

              <p className="mt-3 text-sm font-medium">
                {title}
              </p>

              <p className="mt-1 text-xs text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </motion.div>

      </main>
    </div>
  );
}

export default Assessment;