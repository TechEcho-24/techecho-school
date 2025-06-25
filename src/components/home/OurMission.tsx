import { motion } from "framer-motion";

export const AboutOurMission = () => {
  return (
    <motion.section
      className=" bg-[var(--color-bg)] relative  py-24 px-6 md:px-20 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
        
      
        {/* Gradient Wave Background */}
        <svg
    className="absolute inset-0 w-full h-full opacity-30"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M0,160 C240,100 480,220 720,160 C960,100 1200,200 1440,160"
      stroke="#8e2de2"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M0,180 C240,120 480,240 720,180 C960,120 1200,220 1440,180"
      stroke="#4a00e0"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M0,200 C240,140 480,260 720,200 C960,140 1200,240 1440,200"
      stroke="#e100ff"
      strokeWidth="2"
      fill="none"
    />
  </svg>
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center">
          Shaping the{" "}
          <span className="text-purple-600">Future of Learning</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Our mission is to transform education with adaptive and intelligent
          systems for every learner.
        </p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white/70 border border-purple-200 backdrop-blur-md rounded-xl p-6 shadow-lg text-center">
            <img src="/icons/adaptive.svg" className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Adaptive</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Content evolves with your pace and style.
            </p>
          </div>
          <div className="bg-white/70 border border-yellow-200 backdrop-blur-md rounded-xl p-6 shadow-lg text-center">
            <img src="/icons/data.svg" className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Data-Driven</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Insights that guide smarter learning.
            </p>
          </div>
          <div className="bg-white/70 border border-pink-200 backdrop-blur-md rounded-xl p-6 shadow-lg text-center">
            <img src="/icons/future.svg" className="w-10 h-10 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Future-Ready</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Crafted for the next generation of learners.
            </p>
          </div>
        </div>
  
    </motion.section>
  );
};
