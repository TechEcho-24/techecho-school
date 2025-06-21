// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOTP, verifyEmail } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

export const StepOneForm = ({ handleNext, handleModule }) => {
  const dispatch = useDispatch();
  const { error, loading, isEmailSent } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    email: "",
    otp: "",
  });

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [time, setTime] = useState(0);
  const [resendEnabled, setResendEnabled] = useState(false);

  // useEffect for timer
  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setResendEnabled(true);
    }
    return () => clearInterval(timer);
  }, [time]);

  const handleGetOTP = async (e) => {
    e.preventDefault();
    dispatch(getOTP(data.email));
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (otp.every((char) => char !== "") && isEmailSent) {
      const code = otp.join("");
      await dispatch(verifyEmail({ email: data.email, otp: code }));
      handleNext();
    } else {
      // toast.error("Please enter the OTP");
      return;
    }
  };

  //otp change handler
  const handleOtpChange = (element, index) => {
    const value = element.target.value;

    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus on the next input box if value is entered
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // keydown handler
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };
  return (
    <>
      <div className='flex flex-col items-center overflow-hidden py-4 md:p-8'>
        <div className='flex justify-between items-center w-11/12'>
          <h2 className='md:text-3xl text-2xl font-bold text-neutral-700'>
            Verify Email
          </h2>
          <h3 className='text-neutral-500 block'>
            <span className='text-text-main text-xl'>Step</span>-
            <span className='text-primary text-xl font-semibold'>1</span>/3
          </h3>
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        {loading && <div className='btn-loader'></div>}
        <form className='w-full'>
          <div className='mb-4 basis-1/2'>
            <label
              className='block text-gray-500 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              name='email'
              placeholder='Your email'
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </div>
          {/* otp field  */}
          <div>
            {isEmailSent && !loading && !error && (
              <div>
                <div className='flex gap-2'>
                  {otp.map((_, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type='text'
                      maxLength='1'
                      value={otp[index]}
                      onChange={(e) => handleOtpChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className='w-12 h-12 text-center text-lg border-2 border-dashed border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                    />
                  ))}
                  <button
                    onClick={handleVerify}
                    className=' w-1/3 bg-btn-bg hover:bg-btn-hover-bg text-white font-bold py-2 px-4 border-b-4 border-btn-bg hover:border-btn-hover-bg rounded ml-6'
                  >
                    {loading ? (
                      <div className='btn-loader'></div>
                    ) : (
                      "Verify OTP"
                    )}
                  </button>
                </div>
                <p>
                  wait {time > 0 && time} seconds to resend
                  <button
                    disabled={!resendEnabled}
                    className={`bg-btn-bg hover:bg-btn-hover-bg cursor-pointer mt-5 ml-10 ${
                      !resendEnabled && "text-gray-600"
                    }`}
                  >
                    Resend OTP
                  </button>
                </p>
              </div>
            )}
          </div>
          {!isEmailSent && (
            <div>
              <button
                onClick={handleGetOTP}
                className='bg-btn-bg hover:bg-btn-hover-bg text-white font-bold py-2 px-4 shadow-lg shadow-primary rounded w-full'
              >
                {"Get OTP"}
              </button>
            </div>
          )}
        </form>
        <p className='text-gray-500 mt-10 text-xs md:text-base'>
          Already have a account?
          <button
            onClick={() => handleModule("login")}
            className='text-primary ml-4 underline cursor-pointer'
          >
            Login here
          </button>
        </p>
      </div>
    </>
  );
};
