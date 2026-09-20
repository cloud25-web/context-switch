import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Lightbulb,
  RefreshCw,
  Target,
  TrendingDown,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const results = JSON.parse(
    localStorage.getItem("contextSwitchResults") || "null"
  );

  const concept =
    results?.concept ||
    localStorage.getItem("contextSwitchConcept") ||
    "Binary Search";

  const scores = results?.scores || {
    recall: 0,
    application: 0,
    modification: 0,
    transfer: 0,
  };

  const transferGap =
    scores.recall - scores.transfer;

  const stages = [
    {
      key: "recall",
      label: "Concept Understanding",
      shortLabel: "Recall",
      description: "Understanding the core concept",
      icon: Brain,
    },
    {
      key: "application",
      label: "Direct Application",
      shortLabel: "Application",
      description: "Using the concept in a familiar problem",
      icon: Target,
    },
    {
      key: "modification",
      label: "Modified Application",
      shortLabel: "Modification",
      description: "Adapting the concept to a changed problem",
      icon: RefreshCw,
    },
    {
      key: "transfer",
      label: "Context Transfer",
      shortLabel: "Transfer",
      description: "Recognizing the concept in an unfamiliar context",
      icon: Sparkles,
    },
  ];

  const getScoreLabel = (score) => {
    if (score >= 85) return "Strong";
    if (score >= 70) return "Good";
    if (score >= 50) return "Developing";
    return "Needs Practice";
  };

  const getScoreColor = (score) => {
    if (score >= 85) return "text-emerald-400";
    if (score >= 70) return "text-indigo-400";
    if (score >= 50) return "text-amber-400";
    return "text-red-400";
  };

  return (
    <div className="min-h-screen bg-[#09090f] text-white">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 border-b border-white/10">

        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          <button
            onClick={() => navigate("/")}
            className="text-xl font-semibold tracking-tight"
          >
            Context<span className="text-indigo-400">Switch</span>
          </button>

          <div className="text-sm text-gray-400">
            Transfer Profile
          </div>

        </div>

      </header>

      {/* Main */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >

          <p className="text-sm text-indigo-400 font-medium mb-2">
            YOUR TRANSFER PROFILE
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {concept}
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl">
            Your results show how your ability to use the concept
            changes as the context becomes less familiar.
          </p>

        </motion.div>

        {/* Score Cards */}
        <div className="grid md:grid-cols-2 gap-5">

          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const score = scores[stage.key] ?? 0;

            return (
              <motion.div
                key={stage.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-white/[0.04] border border-white/10 rounded-3xl p-6"
              >

                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      <Icon
                        size={20}
                        className="text-indigo-400"
                      />
                    </div>

                    <div>
                      <h2 className="font-medium">
                        {stage.label}
                      </h2>

                      <p className="text-xs text-gray-500 mt-1">
                        {stage.description}
                      </p>
                    </div>

                  </div>

                  <div className="text-right">

                    <div
                      className={`text-3xl font-semibold ${getScoreColor(
                        score
                      )}`}
                    >
                      {score}%
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      {getScoreLabel(score)}
                    </p>

                  </div>

                </div>

                {/* Progress */}
                <div className="mt-6">

                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${score}%`,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.1,
                      }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                    />

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Transfer Gap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 bg-indigo-500/5 border border-indigo-500/20 rounded-3xl p-7"
        >

          <div className="flex items-start gap-4">

            <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">

              <TrendingDown
                size={21}
                className="text-indigo-400"
              />

            </div>

            <div className="flex-1">

              <div className="flex items-center justify-between gap-4">

                <div>
                  <p className="text-xs text-indigo-400 font-medium uppercase tracking-wider">
                    Transfer Gap
                  </p>

                  <h2 className="text-xl font-semibold mt-1">
                    {Math.max(transferGap, 0)} percentage points
                  </h2>
                </div>

                {results?.transfer_gap && (
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs">
                    Gap detected
                  </span>
                )}

              </div>

              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                This represents the difference between your recall
                performance and your context-transfer performance.
                A larger difference suggests that the concept becomes
                harder to use when the context changes.
              </p>

            </div>

          </div>

        </motion.div>

        {/* Analysis */}
        {results?.analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 bg-white/[0.04] border border-white/10 rounded-3xl p-7"
          >

            <div className="flex items-center gap-3 mb-4">

              <CheckCircle2
                size={20}
                className="text-indigo-400"
              />

              <h2 className="text-lg font-semibold">
                AI Analysis
              </h2>

            </div>

            <p className="text-gray-400 leading-relaxed">
              {results.analysis}
            </p>

          </motion.div>
        )}

        {/* Recommendation */}
        {results?.recommendation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 bg-gradient-to-br from-indigo-500/10 to-violet-500/5 border border-indigo-500/20 rounded-3xl p-7"
          >

            <div className="flex items-start gap-4">

              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">

                <Lightbulb
                  size={21}
                  className="text-indigo-400"
                />

              </div>

              <div>

                <p className="text-xs text-indigo-400 font-medium uppercase tracking-wider">
                  NEXT CHALLENGE
                </p>

                <h2 className="text-xl font-semibold mt-1">
                  Build Transfer Ability
                </h2>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  {results.recommendation}
                </p>

              </div>

            </div>

          </motion.div>
        )}

        {/* Context Distance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-6 bg-white/[0.04] border border-white/10 rounded-3xl p-7"
        >

          <div className="flex items-center justify-between mb-7">

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                CONTEXT DISTANCE
              </p>

              <h2 className="text-xl font-semibold mt-1">
                Performance as context changes
              </h2>
            </div>

          </div>

          <div className="space-y-5">

            {stages.map((stage, index) => {

              const score = scores[stage.key] ?? 0;

              return (
                <div key={stage.key}>

                  <div className="flex justify-between text-sm mb-2">

                    <span className="text-gray-400">
                      {stage.shortLabel}
                    </span>

                    <span className="text-gray-300">
                      {score}%
                    </span>

                  </div>

                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${score}%`,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.7 + index * 0.1,
                      }}
                      className="h-full bg-indigo-500 rounded-full"
                    />

                  </div>

                </div>
              );
            })}

          </div>

          <p className="text-xs text-gray-600 mt-6">
            Context distance is represented through progressively
            different task types in this assessment. It is an
            experimental indicator of transfer performance, not a
            definitive measurement of learning.
          </p>

        </motion.div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

          <button
            onClick={() => navigate("/assess")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition"
          >
            Try Another Concept
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 transition font-medium"
          >
            Back to Home
            <ArrowRight size={18} />
          </button>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;