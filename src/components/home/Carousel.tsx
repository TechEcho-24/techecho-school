import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  // Optional autoplay effect
  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(next, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  return (
    <section className="relative w-full px-4 py-16 overflow-hidden">
      <h2 className="text-center mb-12 text-4xl font-bold ">Why Join Us</h2>

      <div className="flex items-center justify-between bg-white/30 backdrop-blur-lg rounded-2xl border border-purple-200 shadow-xl h-[300px]  px-4 sm:px-6 md:px-10 py-6 min-h-48 md:min-h-52 max-w-4xl mx-auto relative">
        <button
          onClick={prev}
          aria-label="Previous"
          className="text-purple-600 hover:scale-110 transition active:scale-95 focus:outline-none"
        >
          <ChevronLeft size={28} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-xl mx-auto px-4"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-purple-800">
              {highlights[current].title}
            </h3>
            <p className=" text-purple-900/70 text-base sm:text-lg leading-relaxed mt-8">
              {highlights[current].description}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={next}
          aria-label="Next"
          className="text-purple-600 hover:scale-110 transition active:scale-95 focus:outline-none"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="flex items-center justify-center gap-3 mt-6">
        {highlights.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              current === index
                ? "bg-purple-600 scale-110 shadow-md"
                : "bg-purple-300/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
