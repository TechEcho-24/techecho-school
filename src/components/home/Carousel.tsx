import { useState } from "react";
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

  const next = () => setCurrent((prev) => (prev + 1) % highlights.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + highlights.length) % highlights.length);

  return (
    <div className="relative w-full mx-auto px-4 py-12 h-[80vh]">
      <h2 className="text-center mt-12 mb-10 text-4xl font-bold">
        Why Join Us
      </h2>

      <div className=" flex items-center justify-between relative bg-[#0f0f0f] rounded-2xl shadow-md p-6 md:p-10 min-h-32 md:min-h-52 h-full w-[90%] mx-auto">
        <div>
          <button
            onClick={prev}
            className="text-primary hover:scale-110 transition"
          >
            <ChevronLeft size={28} />
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {highlights[current].title}
            </h2>
            <p className="mt-4 text-text-muted text-base md:text-lg max-w-2xl mx-auto">
              {highlights[current].description}
            </p>
          </motion.div>
        </AnimatePresence>
        <div>
          <button
            onClick={next}
            className="text-primary hover:scale-110 transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="">
        <div className="flex items-center justify-center gap-2 mt-4">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition ${
                current === index ? "bg-primary" : "bg-text-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
