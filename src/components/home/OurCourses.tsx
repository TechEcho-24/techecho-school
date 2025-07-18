import { Bot, Code, Server } from "lucide-react";

import { motion } from "framer-motion";
import AnimatedUnderline from "./AmimaterUnderline";

const courses = [
  {
    name: "AI Fundamentals",
    desc: "Unlock the power of Artificial Intelligence with our comprehensive beginner course.",
    icon: <Bot />,
    iconColor: "text-blue-500",
    tags: ["Beginner", "AI", "Machine Learning"],
  },
  {
    name: "AI Coding Bootcamp",
    desc: "Master coding techniques and AI logic with real-world projects.",
    icon: <Code />,
    iconColor: "text-purple-500",
    tags: ["Projects", "JavaScript", "Deep Learning"],
  },
  {
    name: "AI Infrastructure",
    desc: "Learn how to deploy and scale AI systems on cloud infrastructure.",
    icon: <Server />,
    iconColor: "text-green-500",
    tags: ["Cloud", "Deployment", "AI Ops"],
  },
];

export const OurCourses = () => {
  return (
    <div className='relative py-10 px-5 pb-20 md:pb-32 bg-gradient-to-r from-bg to-pink-50'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-center'
      >
        <h1 className='text-3xl md:text-4xl font-bold mt-4 mb-10'>
          Explore Our{" "}
          <span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>
            Courses
          </span>
        </h1>
        <div className='w-3/4 md:w-auto absolute top-8 left-1/2 transform -translate-x-1/2 '>
          <AnimatedUnderline />
        </div>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Dive into our curated collection of courses designed to equip you with
          the latest tech skills and prepare for the future.
        </p>
      </motion.div>

      <div className='flex flex-wrap justify-evenly items-stretch gap-6 mt-16 px-6'>
        {courses.map((course, i) => (
          <motion.div
            key={i}
            className='relative bg-white basis-[400px] shadow-xl shadow-neutral-200 rounded-xl px-6 py-6 cursor-pointer overflow-hidden group'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{
              scale: 1.05,
              rotate: 0.5,
              boxShadow: "0px 12px 40px rgba(180, 120, 255, 0.3)",
            }}
          >
            {/* Gradient in Top-Right Corner */}
            <motion.div className='absolute -bottom-10 -left-10 group-hover:-top-10 group-hover:left-68 w-40 h-40 bg-purple-300 opacity-90 blur-2xl rounded-full z-0 transition-all duration-300' />

            {/* Card Content */}
            <motion.div
              className='flex items-center gap-5 mb-4 relative z-10'
              whileHover={{ rotate: 3 }}
            >
              <motion.span
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`text-3xl ${course.iconColor} bg-gray-100 p-3 rounded-full shadow-md group-hover:shadow-purple-300`}
              >
                {course.icon}
              </motion.span>
              <h3 className='text-xl font-semibold'>{course.name}</h3>
            </motion.div>

            <p className='text-gray-600 my-4 text-sm relative z-10'>
              {course.desc}
            </p>

            <div className='flex flex-wrap gap-2 mt-4 relative z-10'>
              {course.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    index % 2 === 0
                      ? "text-green-600 bg-green-100"
                      : "text-purple-800 bg-purple-100"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 * index }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className='mt-10 flex justify-center'
        whileHover={{ scale: 1.05, rotate: -1 }}
        whileTap={{ scale: 0.95, rotate: 1 }}
      >
        <motion.a
          href='/career'
          className='relative inline-block px-6 py-3 font-semibold rounded-xl transition duration-300 group overflow-hidden border border-purple-500 bg-white text-purple-500 hover:text-white'
          whileHover={{
            backgroundColor: "#8b5cf6", // Tailwind purple-500
            boxShadow: "0px 0px 20px rgba(139, 92, 246, 0.5)",
          }}
        >
          <span className='relative z-10'>See All Courses</span>

          {/* Fancy Hover Bubble Animation */}
          <motion.span
            className='absolute top-0 left-0 w-full h-full bg-purple-500 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0'
            initial={{ scale: 0 }}
            animate={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
          />
        </motion.a>
      </motion.div>
    </div>
  );
};
