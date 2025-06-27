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
    <section className='relative w-full px-4 overflow-hidden md:py-24'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-center mb-12 text-4xl font-bold text-gray-900'
      >
        Why Join Us
      </motion.h2>

      {/* Carousel card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className='flex items-center justify-between bg-white/40 backdrop-blur-xl rounded-2xl border border-purple-200 shadow-lg h-[300px] px-4 sm:px-6 md:px-10 py-6 max-w-4xl mx-auto relative transition-all'
      >
        {/* Prev button */}
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className='text-purple-600 hover:scale-110 transition active:scale-95 focus:outline-none'
        >
          <ChevronLeft size={28} />
        </motion.button>

        {/* Animated content */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='text-center max-w-xl mx-auto px-4'
          >
            <h3 className='text-2xl sm:text-3xl font-semibold text-purple-800'>
              {highlights[current].title}
            </h3>
            <p className='text-purple-900/70 text-base sm:text-lg leading-relaxed mt-8'>
              {highlights[current].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Next button */}
        <motion.button
          onClick={next}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className='text-purple-600 hover:scale-110 transition active:scale-95 focus:outline-none'
        >
          <ChevronRight size={28} />
        </motion.button>
      </motion.div>

      {/* Dot indicators */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className='flex items-center justify-center gap-3 mt-6'
      >
        {highlights.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
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
