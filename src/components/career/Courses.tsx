"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const allCourses = [
  {
    title: "Full Stack Development",
    category: ["Frontend", "Backend"],
    description:
      "Build dynamic websites and apps using HTML, CSS, JavaScript, and modern frameworks.",
    image: "/assets/career/mern.webp",
    path: "/career/web-dev",
  },
  {
    title: "React.js ",
    category: ["Frontend"],
    description:
      "Build dynamic websites and apps using HTML, CSS, JavaScript, and modern frameworks.",
    image: "/assets/career/mern.webp",
    path: "/career/web-dev",
  },
  {
    title: "Node.js",
    category: ["Backend"],
    description:
      "Build dynamic websites and apps using HTML, CSS, JavaScript, and modern frameworks.",
    image: "/assets/career/mern.webp",
    path: "/career/web-dev",
  },
  {
    title: "Next.js",
    category: ["Frontend", "Backend"],
    description:
      "Build dynamic websites and apps using HTML, CSS, JavaScript, and modern frameworks.",
    image: "/assets/career/mern.webp",
    path: "/career/web-dev",
  },
  {
    title: "MongoDB ",
    category: ["Backend"],
    description:
      "Build dynamic websites and apps using HTML, CSS, JavaScript, and modern frameworks.",
    image: "/assets/career/mern.webp",
    path: "/career/web-dev",
  },
  {
    title: "UI/UX Designing",
    category: ["UI/UX"],
    description:
      "Craft beautiful, user-friendly designs and intuitive user interfaces that convert.",
    image: "/assets/career/UI-UX.webp",
    path: "/career/design",
  },
  {
    title: "Digital Marketing",
    category: ["Marketing"],
    description:
      "Learn to grow businesses online through SEO, social media, and paid advertising.",
    image: "/assets/career/marketing.webp",
    path: "/career/marketing",
  },
  {
    title: "AI & Machine Learning",
    category: ["AI", "Backend"],
    description:
      "Dive into the world of AI with Python, ML algorithms, and real-world projects.",
    image: "/assets/career/ai.webp",
    path: "/career/ai",
  },
];

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
    <section className='py-24 pt-32 bg-white text-gray-800'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-purple-600'>
          Unlock Your Future
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

      <div className='mt-20 max-w-4xl mx-auto bg-purple-50 border border-purple-200 p-8 rounded-xl text-center'>
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-4'>
          <span className='text-purple-600 font-bold'>Confused?</span> Talk to
          our mentors!
        </h2>
        <p className='mb-6 text-gray-600'>
          Schedule a free personalized call to discuss the course structure and
          how it fits your goals.
        </p>
        <Link
          to='/schedule'
          className='inline-block bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition'
        >
          Schedule a Call
        </Link>
      </div>
    </section>
  );
};
