import { motion } from "framer-motion";
import {
  BookOpen,
  PlayCircle,
  Wrench,
  MessageCircle,
  Briefcase,
} from "lucide-react";

const steps = [
  {
    title: "Choose a Course",
    desc: "Explore our skill-based programs in tech & design, built for all levels.",
    icon: <BookOpen className='w-6 h-6 text-purple-600' />,
  },
  {
    title: "Start Learning at Your Own Pace",
    desc: "Dive into interactive lessons, real-world projects, and clear concepts.",
    icon: <PlayCircle className='w-6 h-6 text-pink-600' />,
  },
  {
    title: "Build Real Projects",
    desc: "Apply your knowledge by creating hands-on projects for your portfolio.",
    icon: <Wrench className='w-6 h-6 text-yellow-500' />,
  },
  {
    title: "Get Feedback & Mentorship",
    desc: "Connect with expert mentors, ask questions, and improve continuously.",
    icon: <MessageCircle className='w-6 h-6 text-blue-500' />,
  },
  {
    title: "Launch Your Career",
    desc: "Get certificates, build your portfolio, and access job/internship guidance.",
    icon: <Briefcase className='w-6 h-6 text-green-600' />,
  },
];

export const HowTechEchoWorks = () => {
  return (
    <section className='relative bg-white py-24 px-6 md:px-20'>
      {/* Heading */}
      <motion.h2
        className='text-4xl md:text-5xl font-bold text-center text-gray-900'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How <span className='text-purple-600'>TechEcho</span> Works
      </motion.h2>

      <motion.p
        className='mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Learning with us is simple, effective, and focused on outcomes. Here's
        how it works:
      </motion.p>

      {/* Central Glowing Line (only on md+) */}
      <div className='hidden md:block absolute left-1/2 top-60 bottom-40 w-1 bg-gradient-to-b from-purple-500 via-pink-400 to-yellow-300 blur-xs opacity-70 z-0' />

      {/* Steps */}
      <div className='mt-20 space-y-20 max-w-5xl mx-auto relative z-10'>
        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              className={`relative flex flex-col md:flex-row ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } items-center group`}
              initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Card */}
              <div
                className={`relative w-full md:w-[45%] bg-white border border-gray-200 shadow-md rounded-xl p-6 z-10 transition-all duration-300 hover:shadow-xl ${
                  isLeft ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className='flex items-center gap-3 mb-2'>
                  <div className='bg-gray-100 rounded-full p-2 shadow'>
                    {step.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {step.title}
                  </h3>
                </div>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {step.desc}
                </p>
              </div>

              {/* Connector Dot with Number */}
              <div className='hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-purple-500 rounded-full z-20 items-center justify-center shadow-md font-bold text-purple-600 text-sm'>
                {i + 1}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Final Statement */}
      <motion.p
        className='mt-24 text-center text-md text-gray-700'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        🎓 We’re not just teaching —{" "}
        <span className='text-purple-600 font-semibold'>
          we’re preparing you for what comes next.
        </span>
      </motion.p>
    </section>
  );
};
