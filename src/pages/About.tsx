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
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[currentIndex]);
      currentIndex = currentIndex + 1;
      if (currentIndex >= fullText.length - 1) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className='mt-44 px-6'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className='text-center'>
        <motion.h1
          className='text-6xl font-bold mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Learn, Build, Evolve
        </motion.h1>

        <motion.h2
          className='text-5xl font-bold text-primary'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Unlock Your {text}
        </motion.h2>

        <motion.p
          className='w-full md:w-[60%] mx-auto text-lg mt-14 mb-14 text-gray-700'
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
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className='inline-block'
        >
          <Link
            to='/career'
            className='bg-primary text-white text-xl px-6 py-3 rounded-3xl shadow-lg'
          >
            Get Started
          </Link>
        </motion.div>

        <figure>
          <img
            className='h-screen  mx-auto my-10 rounded-xl'
            src='/assets/home/aboutUs.png'
            alt=''
          />
        </figure>

        {/* WHY CHOOSE US */}
        <div className='mt-32 mb-32 px-6 text-center'>
          <motion.h2
            className='text-5xl font-bold mb-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Makes Us Different
          </motion.h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto'>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className='bg-white shadow-xl rounded-2xl p-8 border border-gray-200'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                }}
              >
                <h3 className='text-2xl font-semibold mb-4 text-primary'>
                  {item.title}
                </h3>
                <p className='text-gray-600 text-base'>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <div className='mb-32'>
          <motion.h2
            className='text-4xl font-bold mb-10'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Connect with Us
          </motion.h2>
          <div className='flex justify-center gap-6 text-3xl text-primary'>
            <motion.a
              href='https://twitter.com/'
              target='_blank'
              rel='noreferrer'
              whileHover={{ scale: 1.2 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href='https://linkedin.com/'
              target='_blank'
              rel='noreferrer'
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href='https://instagram.com/'
              target='_blank'
              rel='noreferrer'
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href='https://facebook.com/'
              target='_blank'
              rel='noreferrer'
              whileHover={{ scale: 1.2 }}
            >
              <FaFacebook />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
