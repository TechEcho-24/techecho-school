import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { X } from "lucide-react";
import { StepOneForm } from "./StepOneForm";
// import { StepTwoForm } from "./StepTwoForm"; ❌ Removed
import { StepThreeForm } from "./StepThreeForm";
import { getAuthUser } from "../../features/auth/authThunk";

export const Signup = () => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(getAuthUser() as any);
  }, []);

  // const handleNext = () => {
  //   // Optional: skip step 2
  //   dispatch({ type: "auth/setStep", payload: 3 }); // You must have a reducer that handles this
  // };

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
            {currentStep === 1 && <StepOneForm />}
            {currentStep === 3 && <StepThreeForm />}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
