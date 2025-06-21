import { motion } from "framer-motion";

export const AboutOurMission = () => {
  return (
    <motion.section
      className="py-16 px-6 bg-[var(--color-bg)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
            About Our Mission
          </h2>
          <p className="text-[var(--color-text-muted)] mb-6">
            We started SkillForge to close the gap between learning and doing.
            Our mission is to provide beginner-friendly, project-driven courses
            that help you build a portfolio while you learn.
          </p>
          <motion.a
            href="/about"
            className="inline-block bg-[var(--color-btn-bg)] hover:bg-[var(--color-btn-hover-bg)] text-white font-semibold px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Us
          </motion.a>
        </motion.div>
        {/* Graphic */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src="https://media.istockphoto.com/id/1299309118/vector/the-concept-of-joint-teamwork.jpg?s=612x612&w=0&k=20&c=kviWUej2cG-kgluMKysK3mg-yReNU0bigSj6xte2hMs="
            alt="Skill building graphic"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
