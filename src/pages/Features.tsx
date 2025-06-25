import { Brain, ChartNoAxesCombined } from "lucide-react";
import { FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const courses = [
  {
    name: "AI Fundamentals",
    desc: "Unlock the power of Artificial Intelligence with our comprehensive beginner course.",
    icon: <Brain />,
    iconColor: "text-purple-500",
    iconBackground: "bg-purple-100",
  },
  {
    name: "AI Toolkit",
    desc: "Master essential tools that empower AI developers and researchers.",
    iconColor: "text-pink-500",
    iconBackground: "bg-pink-100",
    icon: <FaTools />,
  },
  {
    name: "AI Visualizations",
    desc: "Learn how to visualize and interpret AI models effectively.",
    iconColor: "text-blue-500",
    iconBackground: "bg-blue-100",
    icon: <ChartNoAxesCombined />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const Features = () => {
  return (
    <div className='py-10 pb-32 bg-[#ede8ff]'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold my-4'>Why TechEcho?</h1>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Discover the unique features that make TechEcho the ultimate platform
          for your tech career
        </p>
      </div>

      <div className='flex justify-evenly items-center gap-4 mt-16 rounded-xl flex-wrap'>
        {courses.map((course, i) => (
          <motion.div
            key={i}
            className='bg-purple-50 text-center basis-[30%] shadow-xl shadow-purple-200 rounded-lg px-4 pt-6 pb-4 cursor-pointer'
            variants={cardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <motion.span
              className={`${course.iconColor} ${course.iconBackground} w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-4 text-2xl`}
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              {course.icon}
            </motion.span>
            <h3 className='text-xl font-semibold'>{course.name}</h3>
            <p className='text-gray-600 my-6'>{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
