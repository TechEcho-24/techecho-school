import { motion } from "framer-motion";
import { Sparkles, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    title: "Adaptive Learning",
    desc: "We don’t believe in one-size-fits-all. Our courses adapt to your learning speed and style — giving you the flexibility and focus you need to succeed.",
    icon: <Sparkles className='w-8 h-8 text-purple-600' />,
  },
  {
    title: "Data-Driven Growth",
    desc: "Track your progress with real-time insights. From understanding your strengths to identifying improvement areas — everything is optimized for smarter learning.",
    icon: <BarChart3 className='w-8 h-8 text-yellow-500' />,
  },
  {
    title: "Future-Ready Skills",
    desc: "Our content is built around real-world industry needs — ensuring you’re not just job-ready, but future-proof.",
    icon: <Rocket className='w-8 h-8 text-pink-500' />,
  },
];

export const AboutOurMission = () => {
  return (
    <section className='relative bg-white py-14 md:py-24 px-6 md:px-20 flex flex-col items-center'>
      {/* Header */}
      <motion.h2
        className='text-3xl md:text-4xl font-bold text-center text-gray-900'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Shaping the <span className='text-purple-600'>Future of Learning</span>
      </motion.h2>

      <motion.p
        className='mt-6 text-sm md:text-lg text-gray-600 text-center max-w-3xl'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        At{" "}
        <strong className='text-lg bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent'>
          TechEcho
        </strong>
        , we believe learning should be dynamic, personalized, and
        outcome-driven. Our goal is to empower students with the skills they
        need to thrive in today's fast-changing digital world — through
        innovative, intelligent, and adaptive learning experiences.
      </motion.p>

      {/* Vertical Timeline */}
      <div className='mt-16 space-y-16 w-full max-w-4xl'>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className='flex flex-col md:flex-row md:items-start items-center gap-6'
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='shrink-0 rounded-full p-4 bg-gradient-to-tr from-purple-100 via-pink-100 to-yellow-100'>
              {step.icon}
            </div>
            <div className='text-center md:text-left max-w-xl'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2 relative inline-block'>
                {step.title}
                <span className='block h-1 mt-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 w-20 rounded'></span>
              </h3>
              <p className='text-gray-700 text-sm leading-relaxed'>
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
