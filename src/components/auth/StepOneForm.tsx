import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useGetOtpMutation, useSignupMutation } from "@/features/auth/authApi";

export const StepOneForm = () => {
  const [signup, { isLoading, error }] = useSignupMutation();
  const [getOtp] = useGetOtpMutation();
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", otp: "" });
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [time, setTime] = useState(0);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [resendEnabled, setResendEnabled] = useState(false);

  // Timer
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else {
      setResendEnabled(true);
    }
    return () => clearInterval(timer);
  }, [time]);

  const handleGetOTP = async (e: any) => {
    e.preventDefault();

    const res = await getOtp({ email: data.email }).unwrap();
    if (res) {
      setIsEmailSent(true);
      setTime(30); // 30 seconds cooldown
      setResendEnabled(false);
    }
  };

  const handleVerify = async (e: any) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    const res = await signup({ email: data.email, otp: fullOtp }).unwrap();
    if (res) {
      navigate("/payment");
    }
  };

  const handleOtpChange = (e: any, index: number) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white px-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full md:w-[60%] lg:w-[50%] bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-10 border border-gray-200 mx-auto'
      >
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-3xl font-bold text-purple-700'>Verify Email</h2>
          <h3 className='text-gray-500 text-sm'>
            <span className='text-gray-800'>Step</span>-
            <span className='text-pink-600 font-bold'>1</span>/2
          </h3>
        </div>

        {error && <p className='text-red-500 text-sm mb-2'>Signup Failed</p>}
        {isLoading && <div className='btn-loader mb-3'></div>}

        <form className='space-y-6' onSubmit={handleVerify}>
          <div>
            <label
              htmlFor='email'
              className='block text-gray-600 text-sm font-medium mb-1'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder='Your email'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400'
              required
            />
          </div>

          {isEmailSent && (
            <div className='space-y-4'>
              <div className='flex gap-2 justify-center'>
                {otp.map((_, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type='text'
                    maxLength={1}
                    value={otp[index]}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className='w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400'
                  />
                ))}
              </div>

              <button
                onClick={handleVerify}
                className='w-full py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 hover:shadow-lg'
              >
                {isLoading ? <div className='btn-loader'></div> : "Verify OTP"}
              </button>

              <p className='text-sm text-gray-600 text-center'>
                {time > 0
                  ? `Wait ${time} second${time > 1 ? "s" : ""} to resend`
                  : "You can now resend OTP."}
                <button
                  disabled={!resendEnabled}
                  onClick={handleGetOTP}
                  className={`ml-2 text-sm font-medium underline ${
                    resendEnabled
                      ? "text-pink-600 hover:text-pink-700"
                      : "text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Resend OTP
                </button>
              </p>
            </div>
          )}

          {!isEmailSent && (
            <button
              onClick={handleGetOTP}
              className='w-full py-2 px-4 text-white font-semibold rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 hover:shadow-lg'
            >
              Get OTP
            </button>
          )}
        </form>

        <p className='text-gray-500 mt-6 text-sm text-center'>
          Already have an account?
          <Link
            to={"/login"}
            className='text-pink-600 underline ml-2 hover:text-pink-700'
          >
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};
