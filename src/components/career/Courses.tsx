"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { allCourses } from "@/data/coursesData";

const categories = ["All", "Frontend", "Backend", "UI/UX", "Marketing", "AI"];

export const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? allCourses
      : allCourses.filter((course) =>
          course.category.includes(selectedCategory)
        );

  return (
    <section className='py-24 pt-32 mb-32 bg-white text-gray-800'>
      <div className='text-center mb-16'>
        <h1 className='text-3xl md:text-5xl font-bold'>
          Unlock Your{" "}
          <span className='bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent'>
            Future
          </span>
        </h1>
        <p className='text-lg mt-2'>Master the skills of tomorrow today.</p>
      </div>

      <div className='flex justify-center flex-wrap gap-4 mb-12'>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-purple-500 text-white"
                : "border-purple-500 text-purple-500 hover:bg-purple-100"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className='max-w-6xl mx-auto grid gap-12 px-6 md:grid-cols-2'>
        {filteredCourses.map((course, index) => (
          <motion.div
            key={index}
            className='rounded-xl border border-gray-200 shadow-xl hover:shadow-2xl overflow-hidden transition'
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={course.image}
              alt={course.title}
              className='w-full h-64 object-cover'
              loading='lazy'
            />
            <div className='p-6'>
              <h3 className='text-2xl font-semibold text-purple-600 mb-2'>
                {course.title}
              </h3>
              <p className='text-gray-600 mb-4'>{course.description}</p>
              <Link
                to={course.path}
                className='inline-block bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition'
              >
                Get Info
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

   
    </section>
  );
};
