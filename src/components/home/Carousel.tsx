import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MagicCard } from "../magicui/magic-card";

const highlights = [
  {
    title: "Interactive Learning",
    description:
      "Dive into hands-on activities, quizzes, and challenges that make learning engaging and fun.",
  },
  {
    title: "Expert Instructors",
    description:
      "Gain knowledge from professionals with real-world experience in leading tech companies.",
  },
  {
    title: "Career Mentorship",
    description:
      "Get one-on-one guidance and resume reviews from industry mentors who care about your growth.",
  },
  {
    title: "Personalized Roadmaps",
    description:
      "Follow a structured path tailored to your goals, whether you're a beginner or upskilling.",
  },
  {
    title: "Live Sessions",
    description:
      "Attend weekly live Q&A sessions, code walkthroughs, and interactive workshops.",
  },
  {
    title: "Project Portfolio",
    description:
      "Build a strong portfolio with real-world projects that help you stand out to employers.",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const autoplay = false;
  const autoplayDelay = 5000;

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % highlights.length),
    []
  );
  const prev = useCallback(
    () =>
      setCurrent((prev) => (prev - 1 + highlights.length) % highlights.length),
    []
  );

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(next, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, next]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  return (
    <section className="relative w-full px-5 sm:px-6 lg:px-8 py-5 md:py-20 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10 text-3xl md:text-4xl font-bold text-gray-900"
      >
        Why{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Join
        </span>{" "}
        Us?
      </motion.h2>

      <MagicCard
        gradientColor={"#D9D9D955"}
        className="p-6 sm:p-10 md:p-20 w-full max-w-4xl mx-auto rounded-xl"
      >
        <div className="flex h-[100px] flex-col md:flex-row items-center justify-between gap-6 md:gap-10 text-center md:text-left">
          {/* Prev button */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-purple-600 hidden md:inline-block focus:outline-none"
          >
            <ChevronLeft size={28} />
          </motion.button>

          {/* Carousel Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex-1"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-800">
                {highlights[current].title}
              </h3>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-2xl mx-auto md:mx-0">
                {highlights[current].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Next button */}
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-purple-600 hidden md:inline-block focus:outline-none"
          >
            <ChevronRight size={28} />
          </motion.button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden justify-center mt-6 gap-8">
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-purple-600 focus:outline-none"
          >
            <ChevronLeft size={28} />
          </motion.button>
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-purple-600 focus:outline-none"
          >
            <ChevronRight size={28} />
          </motion.button>
        </div>
      </MagicCard>

      {/* Dot Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 mt-6"
      >
        {highlights.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1 h-1 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
              current === index
                ? "bg-purple-600 scale-110 shadow-md"
                : "bg-purple-300/50"
            }`}
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Carousel;
