import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TickAnimation from "./SendAnimation";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../features/auth/authThunk";

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.auth);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await dispatch(forgotPassword(email) as any  );

    if (result.error) {
      return; // Exit if there's an error
    }
    setEmail("");
    setSubmitted(true);
  };
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='bg-white w-10/12 md:w-1/2 rounded-lg px-16 py-10'>
        <div className='flex items-center justify-center'>
          <figure className='w-[10%]'>
            <img src='/assets/home/logo.png' alt='logo' className='w-full' />
          </figure>
          <span className='md:text-3xl text-xl text-gray-500 text-shadow font-semibold mt-1 ml-2'>
            TechEcho
          </span>
        </div>
        {error && (
          <p className='text-red-500 border border-red-500 bg-red-200'>
            {error}
          </p>
        )}
        {console.log(submitted)}
        {submitted ? (
          <>
            <TickAnimation />
            <p className='text-gray-500 text-left font-semibold my-5'>
              Please check your mail We have sent you a link on your entered
              email for reset password,{" "}
            </p>
            <p className='text-gray-500 text-left font-semibold mb-10'>
              Click on the link and create your new password{" "}
            </p>
          </>
        ) : (
          <div>
            <p className='text-gray-500 text-center font-semibold my-10'>
              Provide the email address associated with your account to recover
              your TachEcho login Password.
            </p>
            <div className=''>
              <label
                htmlFor='email'
                className='text-sm text-gray-500 font-bold'
              >
                Email <span className='text-red-500'>*</span> :
              </label>
              <input
                id='email'
                type='email'
                required
                placeholder='Enter your email'
                onChange={(e: any   ) => setEmail(e.target.value)}
                className='block w-full p-2 text-sm md:text-base md:p-2 rounded-lg md:mr-4 my-2 outline-blue-500 bg-transparent border-2 border-neutral-500'
              />
            </div>
            <button
              onClick={handleSubmit}
              className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg mt-4 w-full'
            >
              {loading ? <div className='btn-loader'></div> : "Send Email"}
            </button>
          </div>
        )}
        <hr className='border-2 border-b-gray-300 my-8' />
        <div className='flex justify-evenly'>
          <Link
            className='text-gray-400 text-sm font-semibold hover:text-blue-500'
            to='/signup'
          >
            Signup
          </Link>
          <Link
            className='text-gray-400 text-sm font-semibold hover:text-blue-500'
            to='/login'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
