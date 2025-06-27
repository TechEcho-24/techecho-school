import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourse } from "../../features/admin/adminThunk";

export const CourseForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.admin);
  const [data, setData] = useState({
    title: "",
    duration: "",
    price: "",
    level: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addCourse(data) as any);
  };

  return (
    <div className='h-screen w-[75%] float-right mt-[15%] px-20'>
      <form
        onSubmit={handleSubmit}
        className='max-w-lg mx-auto p-6 bg-white shadow-md rounded-md'
      >
        {error && (
          <span className='text-red-500 text-center bg-red-300 border-2 border-red-500'>
            {error.message}
          </span>
        )}
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Course Name:
          </label>
          <input
            type='text'
            name='title'
            value={data.title}
            onChange={(e) => handleChange(e)}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Course Duration:
          </label>
          <input
            type='text'
            name='duration'
            value={data.duration}
            onChange={(e) => handleChange(e)}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Course Price:
          </label>
          <input
            type='text'
            name='price'
            value={data.price}
            onChange={(e) => handleChange(e)}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Course Level:
          </label>
          <select
            name='level'
            value={data.level}
            onChange={(e) => handleChange(e)}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
          >
            <option value=''>Select Level</option>
            <option value='beginner'>Beginner</option>
            <option value='pro'>Pro</option>
            <option value='advanced'>Advanced</option>
          </select>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            Course Description:
          </label>
          <textarea
            name='description'
            value={data.description}
            onChange={(e) => handleChange(e)}
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
        >
          {loading ? <div className='btn-loader'></div> : "Add Course"}
        </button>
      </form>
    </div>
  );
};
