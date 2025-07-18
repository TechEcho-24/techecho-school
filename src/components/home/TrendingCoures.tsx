"use client";

import { Marquee } from "@/components/magicui/marquee";
import { CourseCard } from "../career/CourseCard";
import { motion } from "framer-motion";
import { allCourses } from "@/data/coursesData";

const firstRow = allCourses.slice(0, allCourses.length / 2);
const secondRow = allCourses.slice(allCourses.length / 2);

export function MarqueeDemo() {
  return (
    <div className='relative flex w-full flex-col overflow-hidden bg-gradient-to-r from-slate-50 via-pink-50 to-rose-100 py-10 md:py-20 px-4 md:px-10 rounded-2xl shadow-inner'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center leading-tight'>
        Trending{" "}
        <span className='bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent'>
          Courses
        </span>
      </h1>

      {/* Marquee 1 */}
      <Marquee pauseOnHover className='[--duration:30s] gap-4 sm:gap-6'>
        {firstRow.map((course, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className='cursor-pointer w-[80vw] sm:w-60 md:w-72'
          >
            <CourseCard {...course} />
          </motion.div>
        ))}
      </Marquee>

      {/* Marquee 2 */}
      <Marquee
        reverse
        pauseOnHover
        className='[--duration:30s] mt-8 gap-4 sm:gap-6'
      >
        {secondRow.map((course, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className='cursor-pointer w-[80vw] sm:w-60 md:w-72'
          >
            <CourseCard {...course} />
          </motion.div>
        ))}
      </Marquee>

      {/* Gradient edge overlays */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent z-10' />
    </div>
  );
}
