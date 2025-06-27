import { motion } from "framer-motion";
import { Sparkles, BarChart3, Rocket } from "lucide-react";

// const cardVariants = {
//   offscreen: {
//     opacity: 0,
//     y: 50,
//     rotateX: 20,
//     scale: 0.95,
//   },
//   onscreen: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     scale: 1,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.7,
//       ease: [0.25, 0.46, 0.45, 0.94],
//     },
//   }),
// };

const cards = [
  {
    title: "Adaptive",
    desc: "Content evolves with your pace and style.",
    icon: <Sparkles className='w-12 h-12 text-purple-600' />,
    border: "border-purple-300",
    shadow: "hover:shadow-purple-300",
  },
  {
    title: "Data-Driven",
    desc: "Insights that guide smarter learning.",
    icon: <BarChart3 className='w-12 h-12 text-yellow-500' />,
    border: "border-yellow-300",
    shadow: "hover:shadow-yellow-300",
  },
  {
    title: "Future-Ready",
    desc: "Crafted for the next generation of learners.",
    icon: <Rocket className='w-12 h-12 text-pink-500' />,
    border: "border-pink-300",
    shadow: "hover:shadow-pink-300",
  },
];

export const AboutOurMission = () => {
  return (
    <motion.section
      className='relative bg-white py-24 px-6 md:px-20 flex flex-col items-center'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Top Heading */}
      <motion.h2
        className='text-4xl md:text-5xl font-bold text-gray-900 text-center'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Shaping the <span className='text-purple-600'>Future of Learning</span>
      </motion.h2>
      <motion.p
        className='mt-4 text-lg text-gray-600 text-center max-w-2xl'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our mission is to transform education with adaptive and intelligent
        systems for every learner.
      </motion.p>

      {/* Animated Cards */}
      <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 w-full'>
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`relative group bg-white ${card.border} border backdrop-blur-md rounded-xl p-10 text-center shadow-xl transition-transform duration-300 hover:scale-[1.03] ${card.shadow}`}
            // variants={cardVariants}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true }}
            custom={i}
          >
            {/* Icon Pulse */}
            <motion.div
              className='w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-white shadow-md'
              whileHover={{ scale: 1.15, rotate: [0, 3, -3, 0] }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {card.icon}
            </motion.div>

            <h3 className='text-xl font-semibold my-4'>{card.title}</h3>
            <p className='text-gray-600 text-sm'>{card.desc}</p>

            {/* Glow ring */}
            <motion.div className='absolute -z-10 left-1/2 top-1/2 w-48 h-48 bg-purple-500 opacity-5 blur-2xl rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-500' />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
