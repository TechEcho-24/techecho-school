import { Bot, Code, Server } from "lucide-react";

import { motion } from "framer-motion";

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

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: [0.4, 0, 0.2, 1],
//     },
//   }),
// };

export const OurCourses = () => {
  return (
    <div className='py-10 pb-32 bg-bg'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-center'
      >
        <h1 className='text-4xl font-bold my-4'>Explore Our Courses</h1>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Dive into our curated collection of courses designed to equip you with
          the latest tech skills and prepare for the future.
        </p>
      </motion.div>

      <div className='flex flex-wrap justify-evenly items-stretch gap-6 mt-16 px-6'>
        {courses.map((course, i) => (
          <motion.div
            key={i}
            className='relative bg-white basis-[400px] shadow-xl shadow-neutral-200 rounded-xl px-6 py-6 cursor-pointer hover:shadow-2xl transition-all overflow-hidden'
            // variants={cardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Gradient in Top-Right Corner */}
            <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-bl-full opacity-20 pointer-events-none z-0' />

            {/* Card Content */}
            <motion.div
              className='flex items-center gap-5 mb-4 relative z-10'
              whileHover={{ rotate: 2 }}
            >
              <span
                className={`text-3xl ${course.iconColor} bg-gray-100 p-3 rounded-full shadow-md`}
              >
                {course.icon}
              </span>
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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href='/career'
          className='inline-block bg-white hover:bg-purple-500 border border-purple-500 hover:text-white text-purple-500 font-semibold px-6 py-3 rounded-xl transition'
        >
          See All Courses
        </a>
      </motion.div>
    </div>
  );
};
