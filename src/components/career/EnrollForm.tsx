import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EnrollForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    qualification: "",
    course: "",
    address: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form data submitted: ", formData);
    try {
      let response = await axios.post(
        // change the route to enrolls and remove users when deployed
        `https://techecho-live-3.onrender.com/api/users/enroll`,
        formData, // Pass formData directly
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      console.log(response);
      toast.success("Enrollment successful!");
      navigate("/profile");
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
    }
  };
  return (
    <div className='flex justify-between items-center h-screen w-11/12 mx-auto pt-20 md:pt-32'>
      <div className='basis-2/5 hidden md:inline'>
        <img loading='lazy' src='/assets/career/schedule.webp' alt='schedule' />
      </div>
      <form
        className='text-white w-11/12 md:w-1/2 bg-transparent basis-full md:basis-1/2'
        onSubmit={handleSubmit}
      >
        <h2 className='text-3xl mb-10 text-center'>Enroll Now</h2>

        <div className='flex justify-between'>
          <div className='mb-4 w-[48%]'>
            <label
              htmlFor='firstname'
              className='block text-gray-300 text-sm mb-2'
            >
              First name
            </label>
            <input
              type='text'
              id='firstname'
              name='firstname'
              placeholder='Firstname'
              value={formData.firstname}
              onChange={handleChange}
              required
              className='w-full md:text-xl placeholder:text-white placeholder:text-base text-white bg-transparent border border-gray-700 rounded-md focus:outline-none focus:border-blue-600 p-2 md:p-4'
            />
          </div>
          <div className='mb-4 w-[48%]'>
            <label
              htmlFor='lastname'
              className='block text-gray-300 text-sm mb-2'
            >
              Last name
            </label>
            <input
              type='text'
              id='lastname'
              name='lastname'
              placeholder='Lastname'
              value={formData.lastname}
              onChange={handleChange}
              required
              className='w-full md:text-xl placeholder:text-white placeholder:text-base text-white bg-transparent 
             border border-gray-700 rounded-md focus:outline-none focus:border-blue-600 p-2 md:p-4'
            />
          </div>
        </div>

        <div className='flex justify-between'>
          <div className='mb-4 w-[48%]'>
            <label htmlFor='email' className='block text-gray-300 text-sm mb-2'>
              Email
            </label>
            <input
              type='email'
              placeholder='Email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='md:text-xl placeholder:text-white placeholder:text-base text-white bg-transparent w-full border border-gray-700 rounded-md focus:outline-none focus:border-blue-600 p-2 md:p-4'
            />
          </div>
          <div className='mb-4 w-[48%]'>
            <label htmlFor='phone' className='block text-gray-300 text-sm mb-2'>
              Phone number
            </label>
            <input
              type='tel'
              placeholder='Phone Number'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              required
              className='md:text-xl placeholder:text-white placeholder:text-base text-white bg-transparent w-full border border-gray-700 rounded-md focus:outline-none focus:border-blue-600 p-2 md:p-4'
            />
          </div>
        </div>

        <div className='mb-4'>
          <label htmlFor='address' className='block text-gray-300 text-sm mb-2'>
            Enter your address
          </label>
          <input
            type='text'
            placeholder='Building no,  area, locality, district- pincode'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            required
            className='md:text-xl placeholder:text-white placeholder:text-base text-white bg-transparent w-full  border border-gray-700 rounded-md focus:outline-none focus:border-blue-600 p-2 md:p-4'
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='qualification'
            className='block text-gray-300 text-sm mb-2'
          >
            Select your Qualifications
          </label>
          <select
            name='qualification'
            value={formData.qualification}
            onChange={handleChange}
            className='bg-transparent w-full border border-gray-700 rounded-md focus:outline-none focus:border-blue-600 p-2 md:p-4'
          >
            <option value='' className=' text-black'>
              Select your qualification
            </option>
            <option value='High School' className=' text-black'>
              High School
            </option>
            <option value='Intermediate' className=' text-black'>
              Intermediate
            </option>
            <option value='Graduated' className=' text-black'>
              Graduated
            </option>
            <option value='Other' className=' text-black'>
              Other
            </option>
          </select>
        </div>

        <div className='mb-4'>
          <label htmlFor='course' className='block text-gray-300 text-sm mb-2'>
            Select Courses
          </label>
          <select
            name='course'
            value={formData.course}
            onChange={handleChange}
            className='bg-transparent w-full border border-gray-700 rounded-md focus:outline-none focus:border-blue-600 p-2 md:p-4'
          >
            <option value='' className=' text-black'>
              Select a course
            </option>
            <option
              value='select your qualification'
              className='bg-transparent text-black'
            >
              Frontend Development
            </option>
            <option
              value='select your qualification'
              className='bg-transparent text-black'
            >
              Backend Development
            </option>
            <option value='Web Development' className=' text-black'>
              Full Stack Development
            </option>
            <option value='UI/UX Design' className=' text-black'>
              UI/UX Design
            </option>
            <option value='Digital Marketing' className=' text-black'>
              Digital Marketing
            </option>
          </select>
        </div>

        <button
          type='submit'
          className='text-white w-full p-4 md:text-xl rounded-md bg-transparent border-4 border-neutral-700 hover:bg-blue-700 transition duration-300'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EnrollForm;
