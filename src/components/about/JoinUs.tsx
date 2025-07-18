import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JoinUsSection = () => {
  return (
    <section className='w-full py-20 px-4 md:px-10 lg:px-20 bg-[#f9f6ff] text-center'>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className='text-4xl md:text-5xl font-bold text-purple-700'
      >
        Ready to Grow with Us?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className='mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto'
      >
        Join a vibrant learning community built for dreamers, doers, and digital
        thinkers. Explore curated courses, expert mentorship, and real-world
        skills — all in one place.
      </motion.p>

      <motion.div
        className='mt-10 flex flex-wrap justify-center gap-6'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to='/career'
            className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-purple-300 transition duration-300'
          >
            Join Courses
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to='/contact'
            className='border-2 border-purple-600 text-purple-600 py-3 px-8 rounded-lg font-semibold hover:bg-purple-100 transition duration-300'
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JoinUsSection;
