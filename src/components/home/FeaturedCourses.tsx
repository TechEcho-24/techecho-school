import { motion } from "framer-motion";
// import AnimatedUnderline from "./AmimaterUnderline";

const courses = [
  {
    title: "Web Development Bootcamp",
    desc: "Learn to build dynamic, responsive websites using modern tools and frameworks.",
    badge: "New",
  },
  {
    title: "UI/UX Design Fundamentals",
    desc: "Master user-centered design and create stunning interfaces with Figma.",
    badge: "New",
  },
  {
    title: "Digital Marketing Essentials",
    desc: "Grow brands online with SEO, social media, and data-driven marketing.",
    badge: "Coming Soon",
  },
];

export const FeaturedCourses = () => {
  return (
    <motion.section
      className="py-16 px-6   bg-white text-center mt-40"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Featured Courses
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
            }}
          >
            <span className="inline-block bg-[var(--color-secondary)] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {course.badge}
            </span>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
              {course.title}
            </h3>
            <p className="text-[var(--color-text-muted)]">{course.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href="/courses"
          className="inline-block bg-[var(--color-btn-bg)] hover:bg-[var(--color-btn-hover-bg)] text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          See All Courses
        </a>
      </motion.div>
    </motion.section>
  );
};
