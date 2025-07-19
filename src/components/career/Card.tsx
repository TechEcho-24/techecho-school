import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Card({ course }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className='flex items-center justify-center'>
      <div
        className={`relative w-full h-96 rounded-2xl overflow-hidden shadow-xl ${
          expanded ? "bg-gray-100" : "bg-white"
        }`}
      >
        {/* Background Image */}
        {!expanded && (
          <img
            src={course.image}
            alt='Cover'
            className='absolute inset-0 w-full h-full object-cover'
          />
        )}

        {/* Animated Yellow Panel */}
        <motion.div
          initial={false}
          animate={{
            height: expanded ? "100%" : "43%",
            clipPath: expanded
              ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
              : "polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%)",
            borderTopLeftRadius: expanded ? "1rem" : "1rem",
            borderTopRightRadius: expanded ? "1rem" : "1rem",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className='absolute bottom-0 w-full p-4 text-white bg-gradient-to-br from-purple-500 to-pink-500'
        >
          {/* Top Row: Logo + Date */}
          {/* <div className='flex items-center gap-3 mb-2'>
            <img
              src='/assets/home/newlogo.png'
              alt='Logo'
              className='w-8 h-8'
            />
            <p className='text-sm'>30.11.2022</p>
          </div> */}

          {/* Text */}
          <div className='float-right'>
            <p className='font-medium text-xl mt-4'>{course.title}</p>

            {/* Button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className='float-right mt-4 px-4 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-purple-500 transition-all duration-300'
            >
              {expanded ? "Show Less" : "More Info"}
            </button>
          </div>

          {/* Extra Info with Fade */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                className='mt-4 text-lg text-gray-200'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <p>{course.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
