import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";
import { StepOneForm } from "./StepOneForm";
import { StepTwoForm } from "./StepTwoForm";
import { StepThreeForm } from "./StepThreeForm";
import { getAuthUser } from "../../features/auth/authThunk";

export const Signup = ({
  onClose,
  handleModule,
}: {
  onClose: () => void;
  handleModule: (role: string) => void;
}) => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(getAuthUser() as any);
  }, []);

  const handleNext = () => {
    dispatch(getAuthUser() as any);
  };

  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 z-50 backdrop-blur-md flex items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className='relative w-[95%] md:w-full lg:w-full max-h-full overflow-y-hidden bg-white rounded-2xl p-4'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className='absolute top-4 right-4 text-gray-500 hover:text-gray-800'
          >
            <X size={24} />
          </button>

          {/* Heading */}
          <h2 className='text-3xl md:text-5xl font-extrabold text-center mb-6 md:mb-10 bg-[url("/assets/home/bg.webp")] bg-contain bg-clip-text text-transparent bg-center'>
            Create New Account
          </h2>
          <h2 className='text-4xl font-bold text-primary text-center'>
            Welcome
          </h2>
          {/* Form Layout */}
          <div className='flex flex-col items-center md:flex-row justify-evenly px-12'>
            <div className='hidden md:flex flex-col basis-1/2 pr-4'>
              <figure className=' w-[600px]'>
                <video
                  src='/assets/home/register.mp4'
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  className='pointer-events-none select-none'
                ></video>
              </figure>
            </div>

            <div className='basis-full md:basis-2/3'>
              {/* Step Form */}
              {currentStep === 1 && (
                <StepOneForm
                  handleNext={handleNext}
                  handleModule={handleModule}
                />
              )}
              {currentStep === 2 && <StepTwoForm handleNext={handleNext} />}
              {currentStep === 3 && <StepThreeForm />}
              {/* {currentStep === 4 && <PaymentButton amount={10000} />} */}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
