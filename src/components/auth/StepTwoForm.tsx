/* eslint-disable react/prop-types */
import {
    faArrowRight,
    faEye,
    faEyeSlash,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useEffect, useState } from "react";
  import { getItem, removeItem, setItem } from "../../../utils";
  import { useDispatch, useSelector } from "react-redux";
  import { completeProfile } from "../../features/auth/authSlice";
  
  export const StepTwoForm = ({ handleNext }) => {
    const dispatch = useDispatch();
    const { error, loading } = useSelector((state) => state.auth);
    const [data, setData] = useState({
      username: "",
      phone: "",
      address: "",
      qualification: "",
      password: "",
      reEnterPassword: "",
    });
    const [hidePass, setHidePass] = useState(true);
    const [hideRePass, setHideRePass] = useState(true);
  
    useEffect(() => {
      const stepTwoData = getItem("stepTwoData");
      if (stepTwoData) {
        setData(stepTwoData);
      }
    }, []);
  
    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
      setItem("stepTwoData", { ...data, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await dispatch(completeProfile(data));
      removeItem("stepTwoData");
      console.log("called");
      handleNext();
    };
    return (
      <>
        <div className='flex flex-col items-start md:basis-1/2 py-4 md:p-8'>
          <div className='flex justify-between items-center w-11/12'>
            <h2 className='md:text-3xl text-2xl font-bold text-neutral-700'>
              Personal Information
            </h2>
            <h3 className='text-neutral-500 block'>
              <span className='text-text-main text-xl'>Step</span>-
              <span className='text-primary text-xl font-semibold'>2</span>/3
            </h3>
          </div>
          {error && (
            <div
              className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
              role='alert'
            >
              <span className='block sm:inline'>{error}</span>
            </div>
          )}
          {loading && <div>Loading...</div>}
          <form className='w-full'>
            <div className='flex gap-2'>
              <div className='mb-4 basis-1/2'>
                <label
                  className='block text-gray-500 text-sm font-bold mb-2'
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary'
                  id='name'
                  type='text'
                  name='username'
                  placeholder='Your name'
                  value={data.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='mb-4 basis-1/2'>
                <label
                  className='block text-gray-500 text-sm font-bold mb-2'
                  htmlFor='phone'
                >
                  Phone Number
                </label>
                <div className='relative'>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary'
                    id='phone'
                    type='phone'
                    name='phone'
                    placeholder='Phone number'
                    value={data.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
  
            <div className='flex gap-2'>
              <div className='mb-4 basis-1/2'>
                <label
                  className='block text-gray-500 text-sm font-bold mb-2'
                  htmlFor='qualification'
                >
                  Qualification
                </label>
                <select
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary'
                  id='qualification'
                  name='qualification'
                  value={data.qualification}
                  onChange={handleChange}
                  required
                >
                  <option value='' disabled className='text-gray-400'>
                    Select your qualification
                  </option>
                  <option value='High School' className='text-gray-500'>
                    High School
                  </option>
                  <option value='Intermediate' className='text-gray-500'>
                    Intermediate
                  </option>
                  <option value='Bachelor’s Degree' className='text-gray-500'>
                    Bachelor’s Degree
                  </option>
                  <option value='Master’s Degree' className='text-gray-500'>
                    Master’s Degree
                  </option>
                  <option value='PhD' className='text-gray-500'>
                    PhD
                  </option>
                </select>
              </div>
  
              <div className='mb-4 basis-1/2'>
                <label
                  className='block text-gray-500 text-sm font-bold mb-2'
                  htmlFor='address'
                >
                  Address
                </label>
                <div className='relative'>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary'
                    id='address'
                    type='address'
                    name='address'
                    placeholder='Address'
                    value={data.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
  
            <div className='flex gap-2'>
              <div className='mb-6 relative basis-1/2'>
                <label
                  className='block text-text-muted font-bold text-sm mb-2'
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
                  id='password'
                  name='password'
                  type={hidePass ? "password" : "text"}
                  placeholder='Your password'
                  value={data.password}
                  onChange={handleChange}
                />
                <div
                  className='absolute top-[60%] right-0 flex items-center px-4 text-primary cursor-pointer'
                  onClick={() => setHidePass(!hidePass)}
                >
                  {hidePass ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </div>
              </div>
              <div className='mb-6 relative basis-1/2'>
                <label
                  className='block text-gray-500 font-bold text-sm mb-2'
                  htmlFor='reEnterPassword'
                >
                  Re-Enter Password
                </label>
                <input
                  className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
                  id='reEnterPassword'
                  name='reEnterPassword'
                  type={hideRePass ? "password" : "text"}
                  placeholder='Your password'
                  value={data.reEnterPassword}
                  onChange={handleChange}
                />
                <div
                  className='absolute top-[60%] right-0 flex items-center px-4 text-blue-500 cursor-pointer'
                  onClick={() => setHideRePass(!hideRePass)}
                >
                  {hideRePass ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </div>
              </div>
            </div>
  
            <div className='flex justify-end text-white gap-4 md:gap-0'>
              {/* <button
                disabled
                className='cursor-not-allowed basis-1/2 md:basis-1/3 bg-neutral-500 text-white font-bold md:py-2 px-4 rounded'
              >
                Previous
              </button> */}
              <button
                onClick={handleSubmit}
                className='basis-1/2 md:basis-1/3 bg-btn-bg hover:bg-btn-hover-bg text-white font-bold py-2 px-4 shadow-lg shadow-[#] rounded'
              >
                {loading ? (
                  <div className='btn-loader'></div>
                ) : (
                  <span>
                    Next <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                )}
              </button>
            </div>
          </form>
          {/* <p className='text-gray-500 mt-10 text-xs md:text-base'>
            Already have a account?
            <Link to={"/login"} className='text-blue-500 ml-4 underline'>
              Login here
            </Link>
          </p> */}
        </div>
      </>
    );
  };
  