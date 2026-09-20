import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  ChevronDown,
  Check,
  MoveRight,
  RefreshCw,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  // Animation variants
  const revealUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const revealLeft = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const revealRight = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stages = [
    {
      icon: Brain,
      title: "Recall",
      score: "92%",
      description: "Recognize the concept",
    },
    {
      icon: Target,
      title: "Apply",
      score: "86%",
      description: "Use it in a familiar problem",
    },
    {
      icon: RefreshCw,
      title: "Modify",
      score: "74%",
      description: "Adapt when the problem changes",
    },
    {
      icon: Sparkles,
      title: "Transfer",
      score: "48%",
      description: "Recognize it in a new context",
    },
  ];

  const contextStages = [
    {
      number: "01",
      title: "Recall",
      text: "What is Binary Search?",
    },
    {
      number: "02",
      title: "Apply",
      text: "Find 23 in a sorted array.",
    },
    {
      number: "03",
      title: "Modify",
      text: "Search a rotated array.",
    },
    {
      number: "04",
      title: "Transfer",
      text: "Find minimum factory capacity.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#09090f] text-white">

      {/* ========================================================= */}
      {/* BACKGROUND */}
      {/* ========================================================= */}

      <div className="fixed inset-0 pointer-events-none z-0">

        {/* Main glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.08, 0.13, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-300px] left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-indigo-600 blur-[160px]"
        />

        {/* Left glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-250px] top-[40%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]"
        />

        {/* Right glow */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-250px] bottom-[-150px] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[160px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <nav className="flex h-20 items-center justify-between border-b border-white/[0.06]">

            <button
              onClick={() => navigate("/")}
              className="text-xl font-semibold tracking-tight"
            >
              Context<span className="text-indigo-400">Switch</span>
            </button>

            <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
              <a
                href="#problem"
                className="transition hover:text-white"
              >
                Why ContextSwitch
              </a>

              <a
                href="#context"
                className="transition hover:text-white"
              >
                Context Switch
              </a>

              <a
                href="#how-it-works"
                className="transition hover:text-white"
              >
                How it works
              </a>
            </div>

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => navigate("/assess")}
              className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm transition hover:bg-white/10"
            >
              Try it

              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </motion.button>

          </nav>
        </div>
      </header>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative z-10">

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">

          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

            {/* HERO TEXT */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={revealLeft}
            >

              {/* Badge */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.6,
                }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/5 px-3 py-1.5 text-xs font-medium text-indigo-300"
              >
                <Sparkles size={13} />

                AI-powered knowledge transfer assessment
              </motion.div>

              {/* Heading */}

              <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-6xl lg:text-[72px]">

                Don't test what
                <br />

                you{" "}

                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  memorized.
                </span>

              </h1>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                }}
                className="mt-5 text-3xl font-medium tracking-[-0.035em] text-gray-300 md:text-4xl lg:text-5xl"
              >
                Test what you{" "}
                <span className="text-white">
                  can transfer.
                </span>
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.7,
                }}
                className="mt-7 max-w-xl text-base leading-8 text-gray-400 md:text-lg"
              >
                ContextSwitch measures whether you can recognize
                and apply what you learned when the problem,
                environment, or context changes.
              </motion.p>

              {/* Buttons */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                  duration: 0.7,
                }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 15px 40px rgba(99,102,241,0.25)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() => navigate("/assess")}
                  className="group flex items-center gap-3 rounded-xl bg-indigo-500 px-6 py-3.5 font-medium shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
                >
                  Start Assessment

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </motion.button>

                <a
                  href="#how-it-works"
                  className="flex items-center gap-2 px-5 py-3.5 text-sm text-gray-400 transition hover:text-white"
                >
                  See how it works

                  <ChevronDown size={16} />
                </a>

              </motion.div>

            </motion.div>

            {/* ================================================= */}
            {/* TRANSFER PROFILE */}
            {/* ================================================= */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={revealRight}
              className="relative"
            >

              {/* Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.08, 0.14, 0.08],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-full bg-indigo-500 blur-[90px]"
              />

              {/* Floating card */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-[28px] border border-white/10 bg-[#101018]/90 p-6 shadow-2xl backdrop-blur-xl md:p-7"
              >

                {/* Header */}

                <div className="mb-7 flex items-center justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                      Transfer Profile
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                      Binary Search
                    </h3>
                  </div>

                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10"
                  >
                    <Zap
                      size={18}
                      className="text-indigo-400"
                    />
                  </motion.div>

                </div>

                {/* Overall */}

                <div className="mb-5 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5">

                  <div className="flex items-end justify-between">

                    <div>
                      <p className="text-xs text-gray-500">
                        Overall transfer
                      </p>

                      <p className="mt-1 text-5xl font-semibold tracking-tight">
                        68
                        <span className="text-xl text-gray-500">
                          /100
                        </span>
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-gray-500">
                        Context distance
                      </p>

                      <p className="mt-1 text-sm text-indigo-400">
                        Increasing
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.06]">

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: "68%",
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 0.7,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    />

                  </div>

                </div>

                {/* Stage scores */}

                <div className="space-y-2">

                  {stages.map((stage, index) => {

                    const Icon = stage.icon;

                    return (
                      <motion.div
                        key={stage.title}
                        initial={{
                          opacity: 0,
                          x: 20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.8 + index * 0.12,
                          duration: 0.5,
                        }}
                        whileHover={{
                          x: 5,
                        }}
                        className="group flex items-center gap-4 rounded-xl p-3.5 transition hover:bg-white/[0.035]"
                      >

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-indigo-500/10 bg-indigo-500/10">
                          <Icon
                            size={16}
                            className="text-indigo-400"
                          />
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex items-center justify-between">

                            <p className="text-sm font-medium">
                              {stage.title}
                            </p>

                            <p className="text-sm font-semibold">
                              {stage.score}
                            </p>

                          </div>

                          <div className="mt-2 flex items-center gap-3">

                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">

                              <motion.div
                                initial={{
                                  width: 0,
                                }}
                                animate={{
                                  width: stage.score,
                                }}
                                transition={{
                                  duration: 0.9,
                                  delay: 1 + index * 0.12,
                                }}
                                className="h-full rounded-full bg-indigo-500/70"
                              />

                            </div>

                            <span className="hidden text-[11px] text-gray-600 sm:block">
                              {stage.description}
                            </span>

                          </div>

                        </div>

                      </motion.div>
                    );
                  })}

                </div>

                {/* Transfer gap */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.5,
                  }}
                  className="mt-5 rounded-2xl border border-amber-400/10 bg-amber-400/[0.03] p-4"
                >

                  <div className="flex gap-3">

                    <div className="mt-1">
                      <motion.div
                        animate={{
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="h-2 w-2 rounded-full bg-amber-400"
                      />
                    </div>

                    <div>

                      <p className="text-sm font-medium text-gray-200">
                        Transfer gap detected
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Recognition is stronger than application
                        in unfamiliar contexts.
                      </p>

                    </div>

                  </div>

                </motion.div>

              </motion.div>

              {/* Floating badge */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-5 top-12 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#14141e] px-3 py-2 text-xs text-gray-400 shadow-xl md:flex"
              >

                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />

                Context distance: High

              </motion.div>

            </motion.div>

          </div>

          {/* Scroll indicator */}

          <motion.div
            animate={{
              y: [0, 7, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-14 flex justify-center text-gray-600"
          >
            <ChevronDown size={20} />
          </motion.div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* PROBLEM */}
      {/* ========================================================= */}

      <section
        id="problem"
        className="relative z-10 border-t border-white/[0.06]"
      >

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={revealUp}
          className="mx-auto max-w-7xl px-6 py-24 md:py-28"
        >

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
              The problem
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Recognizing a pattern isn't the same as understanding it.
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-400">
              Traditional assessments often keep the problem structure
              familiar. Students learn to recognize what a solution looks
              like, but real-world problems rarely tell you which concept
              to use.
            </p>

          </div>

          {/* Problem cards */}

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {[
              {
                title: "Familiar",
                heading: "I've seen this before.",
                description:
                  "The pattern is obvious and the solution path is familiar.",
              },
              {
                title: "Changed",
                heading: "Can I adapt it?",
                description:
                  "The underlying idea remains, but the structure is different.",
              },
              {
                title: "Unfamiliar",
                heading: "Can I recognize it here?",
                description:
                  "The concept appears in a completely different context.",
              },
            ].map((card, index) => (

              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -7,
                }}
                className={`rounded-3xl border p-7 transition ${
                  index === 1
                    ? "border-indigo-500/20 bg-indigo-500/[0.04]"
                    : index === 2
                    ? "border-violet-500/20 bg-violet-500/[0.04]"
                    : "border-white/10 bg-white/[0.025]"
                }`}
              >

                <div className="text-xs uppercase tracking-widest text-gray-600">
                  {card.title}
                </div>

                <h4 className="mt-4 text-xl font-medium">
                  {card.heading}
                </h4>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {card.description}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

      {/* ========================================================= */}
      {/* CONTEXT SWITCH */}
      {/* ========================================================= */}

      <section
        id="context"
        className="relative z-10"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={revealUp}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
              The Context Switch
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Same idea.
              <br />

              <span className="text-gray-500">
                Completely different context.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
              ContextSwitch progressively moves a concept farther away
              from the way it was originally learned.
            </p>

          </motion.div>

          {/* Timeline */}

          <div className="relative mt-16">

            {/* Connecting line */}

            <div className="absolute left-[12%] right-[12%] top-1/2 hidden h-px bg-white/[0.08] md:block" />

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformOrigin: "left",
              }}
              className="absolute left-[12%] right-[12%] top-1/2 hidden h-px bg-gradient-to-r from-indigo-500/30 via-indigo-400/70 to-violet-500/30 md:block"
            />

            <div className="grid gap-5 md:grid-cols-4">

              {contextStages.map((stage, index) => (

                <motion.div
                  key={stage.number}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.65,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="relative rounded-3xl border border-white/10 bg-[#0d0d15] p-6"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-gray-600">
                      {stage.number}
                    </span>

                    <motion.div
                      animate={{
                        scale: [1, 1.25, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        delay: index * 0.4,
                        repeat: Infinity,
                      }}
                      className="h-2 w-2 rounded-full bg-indigo-400"
                    />

                  </div>

                  <h4 className="mt-8 text-lg font-semibold">
                    {stage.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {stage.text}
                  </p>

                  <div className="mt-8 text-xs text-indigo-400">
                    Context distance{" "}
                    <span className="text-gray-600">
                      {index + 1}/4
                    </span>
                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* HOW IT WORKS */}
      {/* ========================================================= */}

      <section
        id="how-it-works"
        className="relative z-10 border-t border-white/[0.06]"
      >

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={revealUp}
            className="mx-auto max-w-3xl text-center"
          >

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
              How it works
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Learn → Switch → Discover
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              ContextSwitch gradually removes the clues that normally help
              you identify a solution.
            </p>

          </motion.div>

          {/* Steps */}

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Give us a concept",
                text: "Enter a concept or paste your study notes.",
              },
              {
                number: "02",
                title: "Take the assessment",
                text: "Solve progressively unfamiliar problems without knowing where the concept will appear.",
              },
              {
                number: "03",
                title: "Discover your gap",
                text: "See where recognition turns into difficulty and what to practice next.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.65,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition hover:bg-white/[0.04]"
              >

                <div className="text-xs font-medium text-indigo-400">
                  {item.number}
                </div>

                <h4 className="mt-10 text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>

                <motion.div
                  whileHover={{
                    x: 5,
                  }}
                  className="mt-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover:border-indigo-400/30"
                >
                  <MoveRight
                    size={16}
                    className="text-gray-500 transition group-hover:text-indigo-400"
                  />
                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section className="relative z-10">

        <div className="mx-auto max-w-7xl px-6 pb-24">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative overflow-hidden rounded-[32px] border border-indigo-500/20 bg-gradient-to-br from-indigo-500/[0.10] via-white/[0.03] to-violet-500/[0.08] p-10 text-center md:p-16"
          >

            {/* CTA glow */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.08, 0.15, 0.08],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-[-150px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-500 blur-[100px]"
            />

            <div className="relative">

              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Sparkles
                  size={22}
                  className="mx-auto mb-6 text-indigo-400"
                />
              </motion.div>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Ready to test your transfer?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
                Stop asking whether you remember the concept.
                Find out whether you can use it when the context changes.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    "0 15px 40px rgba(99,102,241,0.25)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => navigate("/assess")}
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-indigo-500 px-7 py-3.5 font-medium shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
              >
                Start Assessment

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </motion.button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="relative z-10 border-t border-white/[0.06]">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row lg:px-10">

          <div className="text-sm font-medium">
            Context<span className="text-indigo-400">Switch</span>
          </div>

          <p className="text-xs text-gray-600">
            Don't test what you memorized. Test what you can transfer.
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Check
              size={13}
              className="text-indigo-400"
            />

            AI-powered assessment
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Landing;