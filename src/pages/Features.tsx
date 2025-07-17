import { Brain, ChartLine } from "lucide-react";
import { FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    name: "Expert Mentorship",
    desc: "Learn from industry professionals who guide you through every step with personalized mentorship.",
    icon: <Brain />,
    iconColor: "text-purple-500",
    iconBackground: "bg-purple-100",
  },
  {
    name: "Hands-On Tools",
    desc: "Master essential tools and real-world workflows used by top developers and AI engineers.",
    icon: <FaTools />,
    iconColor: "text-pink-500",
    iconBackground: "bg-pink-100",
  },
  {
    name: "Certification & Career Support",
    desc: "Earn recognized certificates and get help with job placements, resume building, and mock interviews.",
    icon: <ChartLine />,
    iconColor: "text-blue-500",
    iconBackground: "bg-blue-100",
  },
];

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

export const Features = () => {
  return (
    <div className='py-14 md:py-24 px-5 md:px-20 pb-32 bg-white'>
      <div className='text-center'>
        <h1 className='text-3xl md:text-4xl font-bold my-4'>
          Why Choose{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>
            TechEcho
          </span>{" "}
          ?
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          TechEcho offers more than just AI courses — get certified, build real
          projects, receive 1-on-1 mentorship, and boost your career with
          hands-on training across in-demand tech skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 rounded-xl flex-wrap">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="bg-purple-50 text-center basis-[30%] md:shadow-xl shadow shadow-purple-200 rounded-lg px-4 pt-6 pb-4 cursor-pointer"
            // variants={cardVariants}
            initial={{ scale: 0, opacity: 0, y: 40 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <motion.span
              className={`${item.iconColor} ${item.iconBackground} w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-4 text-2xl`}
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              {item.icon}
            </motion.span>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600 my-6">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
