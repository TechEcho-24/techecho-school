import { Link, useLocation } from "react-router-dom";
import TickAnimation from "./SendAnimation";
import { useEffect, useState } from "react";
import { useResetPasswordMutation } from "@/features/auth/authApi";

export const ResetPassword = () => {
  const [resetPassword, { isLoading, error, isSuccess }] =
    useResetPasswordMutation();
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
    token: "",
  });
  useEffect(() => {
    const token = location.search.split("=")[1];
    console.log(token);
    if (token) {
      setData({ ...data, token: token });
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await resetPassword(data).unwrap();
    if (isSuccess) {
      setSubmitted(true);
    }
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
            {typeof error === "string"
              ? error
              : "data" in (error as any) &&
                typeof (error as any).data === "string"
              ? (error as any).data
              : "An error occurred. Please try again."}
          </p>
        )}
        {submitted ? (
          <>
            <TickAnimation />
            <p className='text-gray-500 text-left text-2xl font-semibold my-5'>
              Password reset successfully
            </p>
            <p className='text-gray-500 text-left font-semibold mb-10'>
              Login with your new password
            </p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>
              <Link to={"/login"}>Login</Link>
            </button>
          </>
        ) : (
          <div>
            <p className='text-gray-500 text-center font-semibold my-10'>
              Provide the email address associated with your account to recover
              your TachEcho login Password.
            </p>
            <div>
              <label
                htmlFor='password'
                className='text-sm text-gray-500 font-bold'
              >
                New Password <span className='text-red-500'>*</span> :
              </label>
              <input
                id='password'
                type='password'
                required
                placeholder='Enter your new password'
                onChange={(e: any) =>
                  setData({ ...data, password: e.target.value })
                }
                className='block w-full p-2 text-sm md:text-base md:p-2 rounded-lg md:mr-4 my-2 outline-blue-500 bg-transparent border-2 border-neutral-500'
              />
            </div>
            <div>
              <label
                htmlFor='repassword'
                className='text-sm text-gray-500 font-bold'
              >
                Re-enter Password <span className='text-red-500'>*</span> :
              </label>
              <input
                id='repassword'
                type='password'
                required
                placeholder='Re-enter you password'
                onChange={(e) =>
                  setData({ ...data, confirmPassword: e.target.value })
                }
                className='block w-full p-2 text-sm md:text-base md:p-2 rounded-lg md:mr-4 my-2 outline-blue-500 bg-transparent border-2 border-neutral-500'
              />
            </div>
            <button
              onClick={handleSubmit}
              className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg mt-4 w-full'
            >
              {isLoading ? (
                <div className='btn-loader'></div>
              ) : (
                "Reset Password"
              )}
            </button>
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
        )}
      </div>
    </div>
  );
};
