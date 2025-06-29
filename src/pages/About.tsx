import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const highlights = [
  {
    title: "Interactive Learning",
    description:
      "Dive into hands-on activities, quizzes, and challenges that make learning engaging and fun.",
  },
  {
    title: "Expert Instructors",
    description:
      "Gain knowledge from professionals with real-world experience in leading tech companies.",
  },
  {
    title: "Career Mentorship",
    description:
      "Get one-on-one guidance and resume reviews from industry mentors who care about your growth.",
  },
  {
    title: "Personalized Roadmaps",
    description:
      "Follow a structured path tailored to your goals, whether you're a beginner or upskilling.",
  },
  {
    title: "Live Sessions",
    description:
      "Attend weekly live Q&A sessions, code walkthroughs, and interactive workshops.",
  },
  {
    title: "Project Portfolio",
    description:
      "Build a strong portfolio with real-world projects that help you stand out to employers.",
  },
];

export const About = () => {
  const [text, setText] = useState("");
  const fullText = "Poossibilities";
  const typingSpeed = 80;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[currentIndex]);
      currentIndex++;
      if (currentIndex >= fullText.length - 1) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className='pt-32 pb-16 px-6 bg-white text-gray-800'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* HEADER */}
      <div className='text-center max-w-3xl mx-auto mb-16'>
        <motion.h1
          className='text-4xl md:text-6xl font-bold mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Learn, Build, Evolve
        </motion.h1>
        <motion.h2
          className='text-3xl md:text-5xl font-bold text-purple-500'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Unlock Your {text}
        </motion.h2>
        <motion.p
          className='mt-10 text-lg text-gray-600'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          At <strong>TechEcho</strong>, we turn curiosity into capability. With
          expert-led courses, community collaboration, and real-world projects,
          we’re helping the next generation of tech innovators rise to the
          challenge.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className='mt-8 inline-block'
        >
          <Link
            to='/career'
            className='bg-purple-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-purple-600 transition'
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      {/* IMAGE */}
      <div className='max-w-5xl mx-auto mb-24 px-4'>
        <img
          src='/assets/home/aboutUs.png'
          alt='About TechEcho'
          className='w-full h-auto rounded-2xl shadow-xl'
          loading='lazy'
        />
      </div>

      {/* HIGHLIGHTS */}
      <div className='max-w-6xl mx-auto px-4 mb-32'>
        <motion.h2
          className='text-center text-4xl md:text-5xl font-bold text-gray-800 mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Makes Us Different
        </motion.h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className='bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className='text-xl font-semibold text-purple-500 mb-2'>
                {item.title}
              </h3>
              <p className='text-gray-600'>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SOCIAL LINKS */}
      <div className='text-center mb-20'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-6 text-gray-800'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Connect with Us
        </motion.h2>

        <div className='flex justify-center gap-8 text-3xl text-purple-500'>
          <motion.a
            href='https://twitter.com/'
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.2 }}
            className='hover:text-purple-600 transition'
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href='https://linkedin.com/'
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.2 }}
            className='hover:text-purple-600 transition'
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href='https://instagram.com/'
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.2 }}
            className='hover:text-purple-600 transition'
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href='https://facebook.com/'
            target='_blank'
            rel='noreferrer'
            whileHover={{ scale: 1.2 }}
            className='hover:text-purple-600 transition'
          >
            <FaFacebook />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};
