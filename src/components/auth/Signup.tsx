import { motion, AnimatePresence } from "framer-motion";
import { StepOneForm } from "./StepOneForm";

export const Signup = () => {
  return (
    <AnimatePresence>
      <motion.div
        className='backdrop-blur-md flex items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className='relative w-[100%] md:w-full lg:w-full bg-white rounded-2xl'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Form Layout */}

          <div>
            {/* Step Forms */}
            <StepOneForm />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
