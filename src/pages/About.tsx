import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

// Highlights stay the same...

const testimonials = [
  {
    name: "Priya Sharma",
    feedback:
      "TechEcho helped me switch careers into tech. The hands-on projects and mentorship were game-changing!",
    role: "Full Stack Developer @ TCS",
  },
  {
    name: "Aman Verma",
    feedback:
      "The personalized roadmap and real-time support made learning so much smoother.",
    role: "Software Engineer @ Zoho",
  },
];

const team = [
  { name: "Ankit Rao", role: "Founder & CEO", img: "/team/ankit.jpg" },
  { name: "Nisha Jain", role: "Lead Instructor", img: "/team/nisha.jpg" },
  { name: "Ravi Deshmukh", role: "Curriculum Designer", img: "/team/ravi.jpg" },
];

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
  {
    title: "Community Support",
    description:
      "Join an active and friendly community where learners support and grow together.",
  },
  {
    title: "Certificate of Completion",
    description:
      "Earn industry-recognized certificates for each completed course and skill track.",
  },
  {
    title: "Job Preparation Kit",
    description:
      "Access curated resources for interviews, coding tests, and real-world job scenarios.",
  },
];

export const About = () => {
  return (
    <motion.section
      className='pt-32 pb-16 px-6 bg-white text-gray-800'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* HERO */}
      <div className='text-center max-w-3xl mx-auto mb-20'>
        <motion.h1 className='text-5xl font-bold mb-4 text-purple-600'>
          Learn, Build, Evolve
        </motion.h1>
        <motion.p className='mt-6 text-lg text-gray-600'>
          At <strong>TechEcho</strong>, we empower learners to become tech
          leaders through project-based learning, expert mentorship, and a
          thriving community.
        </motion.p>
        <motion.div className='mt-8'>
          <Link
            to='/career'
            className='bg-purple-500 text-white px-6 py-3 rounded-full shadow hover:bg-purple-600 transition'
          >
            Join the Journey
          </Link>
        </motion.div>
      </div>

      {/* BRAND MISSION */}
      <div className='max-w-5xl mx-auto text-center mb-20'>
        <h2 className='text-3xl font-bold mb-4'>Our Mission</h2>
        <p className='text-gray-600'>
          We’re not just a platform. We’re a movement to make tech education
          accessible, practical, and result-driven. Whether you're starting
          fresh or leveling up, we walk with you — every step of the way.
        </p>
      </div>

      {/* VIDEO SECTION */}
      <div className='max-w-5xl mx-auto mb-20'>
        <motion.div className='relative rounded-xl overflow-hidden shadow-xl'>
          <iframe
            className='w-full h-64 md:h-96'
            src='https://www.youtube.com/embed/dQw4w9WgXcQ'
            title='Intro to TechEcho'
            allowFullScreen
          />
        </motion.div>
      </div>

      {/* WHAT MAKES US DIFFERENT */}
      <div className='max-w-6xl mx-auto px-4 mb-32'>
        <h2 className='text-center text-4xl font-bold mb-16'>
          Why Learners Love TechEcho
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className='bg-white p-6 rounded-xl border shadow hover:shadow-lg transition'
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

      {/* TESTIMONIALS */}
      <div className='bg-gray-100 py-20'>
        <h2 className='text-center text-4xl font-bold mb-10'>
          Hear from Our Students
        </h2>
        <div className='max-w-4xl mx-auto grid gap-10 md:grid-cols-2'>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className='bg-white p-6 rounded-xl shadow-md'
              whileHover={{ scale: 1.02 }}
            >
              <p className='text-gray-700 italic mb-4'>" {t.feedback} "</p>
              <h4 className='font-bold text-purple-600'>{t.name}</h4>
              <p className='text-sm text-gray-500'>{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OUR TEAM */}
      <div className='max-w-6xl mx-auto py-24'>
        <h2 className='text-4xl font-bold text-center mb-16'>Meet the Team</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          {team.map((member, i) => (
            <motion.div
              key={i}
              className='text-center'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className='w-28 h-28 mx-auto rounded-full mb-4 object-cover'
              />
              <h3 className='font-semibold text-xl text-gray-800'>
                {member.name}
              </h3>
              <p className='text-sm text-gray-500'>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className='bg-purple-50 py-20'>
        <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-8'>
          <div>
            <h3 className='text-4xl font-bold text-purple-600'>50K+</h3>
            <p className='text-gray-600'>Students Enrolled</p>
          </div>
          <div>
            <h3 className='text-4xl font-bold text-purple-600'>98%</h3>
            <p className='text-gray-600'>Course Satisfaction</p>
          </div>
          <div>
            <h3 className='text-4xl font-bold text-purple-600'>4.9/5</h3>
            <p className='text-gray-600'>Average Course Rating</p>
          </div>
        </div>
      </div>

      {/* SOCIAL LINKS */}
      <div className='text-center mt-20'>
        <h2 className='text-3xl font-bold mb-6'>Connect with Us</h2>
        <div className='flex justify-center gap-8 text-3xl text-purple-500'>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noreferrer'
            className='hover:text-purple-600 transition'
          >
            <FaTwitter />
          </a>
          <a
            href='https://linkedin.com/'
            target='_blank'
            rel='noreferrer'
            className='hover:text-purple-600 transition'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://instagram.com/'
            target='_blank'
            rel='noreferrer'
            className='hover:text-purple-600 transition'
          >
            <FaInstagram />
          </a>
          <a
            href='https://facebook.com/'
            target='_blank'
            rel='noreferrer'
            className='hover:text-purple-600 transition'
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
